'use server'
import { promises as fs } from 'fs';
import https from 'https';
import querystring from 'querystring';
import { randomUUID } from 'crypto';
export default async function Convert() {
  

  // let FILE_PATH = '/Users/minhha/TikGuard/tikguard/Fuck you sound effect copy.mp4'
  // const createData = querystring.stringify({
  //   lang: 'en',
  //   remotePath: '/Users/minhha/TikGuard/tikguard/Fuck you sound effect copy.mp4',
  // });

  //   console.log('submitting a local file');
  //   let formData = '';
  //   const boundary = randomUUID().replace(/-/g, '');
  //   formData += '--' + boundary + '\r\n';
  //   formData +=
  //     'Content-Disposition: form-data; name="file"; filename="' +
  //     getFileNameByPath(FILE_PATH) +
  //     '"\r\n';
  //   formData += 'Content-Type: application/octet-stream\r\n\r\n';
  //   let formDataBuffer = Buffer.concat([
  //     Buffer.from(formData, 'utf8'),
  //     await fs.readFile(FILE_PATH),
  //     Buffer.from('\r\n--' + boundary + '--\r\n', 'utf8'),
  //   ]);
  //   let createRequest = https.request({
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': `multipart/form-data; boundary=${boundary}`,
  //       'Content-Length': formDataBuffer.length,
  //       keyId: process.env.APIKEYID,
  //       keySecret: process.env.APIKEYSECRET,
  //     },
  //     hostname: 'api.speechflow.io',
  //     path: '/asr/file/v1/create?lang=' + 'en',
  //   });
  //   createRequest.write(formDataBuffer);

  
  // function getFileNameByPath(path: string) {
  //   let index = path.lastIndexOf('/');
  //   return path.substring(index + 1);
  // }
  // createRequest.on('response', (createResponse) => {
  //   let responseData = '';
  
  //   createResponse.on('data', (chunk) => {
  //     responseData += chunk;
  //   });
  
  //   createResponse.on('end', () => {
  //     let taskId;
  //     const responseJSON = JSON.parse(responseData);
  //     console.log(responseJSON);
  //     if (responseJSON.code == 10000) {
  //       taskId = responseJSON.taskId;
  //     } else {
  //       console.log('create error:');
  //       console.log(responseJSON.msg);
  //       return;
  //     }
  
  //     let intervalID = setInterval(() => {
  //       const queryRequest = https.request(
  //         {
  //           method: 'GET',
  //           headers: {
  //             keyId: 'dZLKY1vC9Zcv7Bzi',
  //             keySecret: 'ixWlWhxP9RpHN5cP',
  //           },
  //           hostname: 'api.speechflow.io',
  //           path:
  //             '/asr/file/v1/query?taskId=' +
  //             taskId +
  //             '&resultType=' +
  //             "4",
  //         },
  //         (queryResponse) => {
  //           let responseData = '';
  
  //           queryResponse.on('data', (chunk) => {
  //             responseData += chunk;
  //           });
  
  //           queryResponse.on('end', () => {
  //             const responseJSON = JSON.parse(responseData);
  //             if (responseJSON.code === 11000) {
  //               console.log('transcription result:');
  //               console.log(responseData);
  //               clearInterval(intervalID);
  //             } else if (responseJSON.code == 11001) {
  //               console.log('waiting');
  //             } else {
  //               console.log(responseJSON);
  //               console.log('transcription error:');
  //               console.log(responseJSON.msg);
  //               clearInterval(intervalID);
  //             }
  //           });
  //         }
  //       );
  
  //       queryRequest.on('error', (error) => {
  //         console.error(error);
  //       });
  //       queryRequest.end();
  //     }, 3000);
  //   });
  // });
  
  // createRequest.on('error', (error) => {
  //   console.error(error);
  // });
  
  // createRequest.write(createData);
  // createRequest.end();
}