'use server';

const https = require('https');
const querystring = require('querystring');
const fs = require('fs');
const { randomUUID } = require('crypto');

import { NextResponse } from 'next/server';
export async function GET() {
  const LANG = 'en';
  // The local path or remote path of media file.
  const FILE_PATH =
    '/Users/minhha/TikGuard/tikguard/Fuck you sound effect copy.mp4';

  const createData = querystring.stringify({
    lang: LANG,
    remotePath: FILE_PATH,
  });

  console.log('submitting a local file');
  let formData = '';
  const boundary:string = randomUUID().replace(/-/g, "");
  formData += "--" + boundary + "\r\n";
  formData += 'Content-Disposition: form-data; name="file"; filename="' + getFileNameByPath(FILE_PATH) + '"\r\n';
  formData += "Content-Type: application/octet-stream\r\n\r\n";
  let formDataBuffer:Buffer = Buffer.concat([
      Buffer.from(formData, "utf8"),
      fs.readFileSync(FILE_PATH),
      Buffer.from("\r\n--" + boundary + "--\r\n", "utf8"),
  ]);
  createRequest = https.request({
      method: 'POST',
      headers: {
          "Content-Type": `multipart/form-data; boundary=${boundary}`,
          "Content-Length": formDataBuffer.length,
          'keyId': API_KEY_ID,
          'keySecret': API_KEY_SECRET,
      },
      hostname: 'api.speechflow.io',
      path: '/asr/file/v1/create?lang=' + LANG
  });
  createRequest.write(formDataBuffer)


function getFileNameByPath(path:string) {
  let index = path.lastIndexOf("/");
  return path.substring(index + 1);
}

createRequest.on('response', (createResponse:IncomingMessage):void => {
  let responseData = '';

  createResponse.on('data', (chunk:string):void => {
      responseData += chunk;
  });

  createResponse.on('end', ():void => {
      const responseJSON:{code: number, taskId: string, msg: string} = JSON.parse(responseData);
      let taskId
      if (responseJSON.code == 10000) {
          taskId = responseJSON.taskId;
      } else {
          console.log("create error:");
          console.log(responseJSON.msg);
          return ;
      }

      let intervalID: ReturnType<typeof setInterval> = setInterval(() => {
          const queryRequest:ClientRequest = https.request({
              method: 'GET',
              headers: {
                  'keyId': API_KEY_ID,
                  'keySecret': API_KEY_SECRET
              },
              hostname: 'api.speechflow.io',
              path: '/asr/file/v1/query?taskId=' + taskId + '&resultType=' + RESULT_TYPE
          }, (queryResponse:IncomingMessage):void => {
              let responseData = '';

              queryResponse.on('data', (chunk:string):void => {
                  responseData += chunk;
              });

              queryResponse.on('end', ():void => {
                  const responseJSON:{ code: number, msg: string} = JSON.parse(responseData);
                  if (responseJSON.code === 11000) {
                      console.log('transcription result:');
                      console.log(responseData);
                      clearInterval(intervalID);
                  } else if (responseJSON.code == 11001) {
                      console.log('waiting');
                  } else {
                      console.log("transcription error:");
                      console.log(responseJSON.msg);
                      clearInterval(intervalID);
                  }
              });
          });

          queryRequest.on('error', (error:Error):void => {
              console.error(error);
              clearInterval(intervalID);
          });
          queryRequest.end();
      }, 3000);
  });
});

createRequest.on('error', (error:Error):void => {
  console.error(error);
});

createRequest.write(createData);
createRequest.end();
  console.log(a);
  return NextResponse.json({ test1: randomUUID() });
}
