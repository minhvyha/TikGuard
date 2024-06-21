'use server';

const https = require('https');
const querystring = require('querystring');
const { randomUUID } = require('crypto');

import { ClientRequest, IncomingMessage } from 'http';

import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  const LANG = 'en';
  // The local path or remote path of media file.
  const data = await request.json();  
  const FILE_PATH = data.path 
  const createData = querystring.stringify({
    lang: LANG,
    remotePath: FILE_PATH,
  });

  console.log('submitting a local file');
  let formData = '';
  const boundary: string = randomUUID().replace(/-/g, '');
  formData += '--' + boundary + '\r\n';
  formData +=
    'Content-Disposition: form-data; name="file"; filename="' +
    getFileNameByPath(FILE_PATH) +
    '"\r\n';
  formData += 'Content-Type: application/octet-stream\r\n\r\n';
 
  let formDataBuffer: Buffer = Buffer.concat([
    Buffer.from(formData, 'utf8'),
    Buffer.from(data.file.data),
    Buffer.from('\r\n--' + boundary + '--\r\n', 'utf8'),
  ]);
  let createRequest = https.request({
    method: 'POST',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      'Content-Length': formDataBuffer.length,
      keyId: process.env.APIKEYID,
      keySecret: process.env.APIKEYSECRET,
    },
    hostname: 'api.speechflow.io',
    path: '/asr/file/v1/create?lang=' + LANG,
  });
 createRequest.write(formDataBuffer);

 fetch('https://tikguarddatabase-minhvyhas-projects.vercel.app/addReport', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      id: 'boundary',
      result:'responseJSON.result',
  }),
  });
  function getFileNameByPath(path: string) {
    let index = path.lastIndexOf('/');
    return path.substring(index + 1);
  }

  createRequest.on('response', (createResponse: IncomingMessage): void => {
    let responseData = '';

    createResponse.on('data', (chunk: string): void => {
      responseData += chunk;
    });
    // return responseData
    createResponse.on('end', (): void => {
      const responseJSON: { code: number; taskId: string; msg: string } =
        JSON.parse(responseData);
      let taskId;
      if (responseJSON.code == 10000) {
        taskId = responseJSON.taskId;
      } else {
        console.log('create error:');
        console.log(responseJSON.msg);
        return;
      }

      let intervalID: ReturnType<typeof setInterval> = setInterval(() => {
        const queryRequest: ClientRequest = https.request(
          {
            method: 'GET',
            headers: {
              keyId: process.env.APIKEYID,
              keySecret: process.env.APIKEYSECRET,
            },
            hostname: 'api.speechflow.io',
            path: '/asr/file/v1/query?taskId=' + taskId + '&resultType=' + 4,
          },
          (queryResponse: IncomingMessage): void => {
            let responseData = '';

            queryResponse.on('data', (chunk: string): void => {
              responseData += chunk;
            });

            queryResponse.on('end', async (): Promise<void> => {
              const responseJSON: { code: number; msg: string, result:string } =
                JSON.parse(responseData);
              if (responseJSON.code === 11000) {
                console.log('transcription result:');
                console.log(responseData);
                fetch('https://tikguarddatabase-minhvyhas-projects.vercel.app/addReport', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: boundary,
                        result:responseJSON.result,
                    }),
                    });
                    clearInterval(intervalID);
              } else if (responseJSON.code == 11001) {
                console.log('waiting');
              } else {
                console.log('transcription error:');
                console.log(responseJSON.msg);
                clearInterval(intervalID);
              }
            });
          }
        );

        queryRequest.on('error', (error: Error): void => {
          console.error(error);
          clearInterval(intervalID);
        });
        queryRequest.end();
      }, 3000);
    });
  });
  createRequest.on('error', (error: Error): void => {
    console.error(error);
  });

  createRequest.write(createData);
  createRequest.end();
  return NextResponse.json({ id: boundary });
}
