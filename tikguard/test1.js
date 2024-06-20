const https = require('https');
const querystring = require('querystring');
const fs = require('fs');
const { randomUUID } = require('crypto');

// Generate API KEY, see: https://docs.speechflow.io/#/?id=generate-api-key
const API_KEY_ID = 'YOUR_API_KEY_ID';
const API_KEY_SECRET = 'YOUR_API_KEY_SECRET';
// The language code of the speech in media file.
// See more lang code: https://docs.speechflow.io/#/?id=ap-lang-list
const LANG = 'en';
// The local path or remote path of media file.
const FILE_PATH =
  'https://sf-docs-prod.s3.us-west-1.amazonaws.com/web/sample-audios/EN.wav';

// The translation result type.
// 1, the default result type, the json format for sentences and words with begin time and end time.
// 2, the json format for the generated subtitles with begin time and end time.
// 3, the srt format for the generated subtitles with begin time and end time.
// 4, the plain text format for transcription results without begin time and end time.
const RESULT_TYPE = 1;
//Parameter of the remote file
const createData = querystring.stringify({
  lang: LANG,
  remotePath: FILE_PATH,
});
if (FILE_PATH.startsWith('http')) {
  console.log('submitting a remote file');
  createRequest = https.request({
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': createData.length,
      keyId: 'dZLKY1vC9Zcv7Bzi',
      keySecret: 'ixWlWhxP9RpHN5cP',
    },
    body: createData,
    hostname: 'api.speechflow.io',
    path: '/asr/file/v1/create',
  });
} else {
  console.log('submitting a local file');
  let formData = '';
  const boundary = randomUUID().replace(/-/g, '');
  formData += '--' + boundary + '\r\n';
  formData +=
    'Content-Disposition: form-data; name="file"; filename="' +
    getFileNameByPath(FILE_PATH) +
    '"\r\n';
  formData += 'Content-Type: application/octet-stream\r\n\r\n';
  let formDataBuffer = Buffer.concat([
    Buffer.from(formData, 'utf8'),
    fs.readFileSync(FILE_PATH),
    Buffer.from('\r\n--' + boundary + '--\r\n', 'utf8'),
  ]);
  createRequest = https.request({
    method: 'POST',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      'Content-Length': formDataBuffer.length,
      keyId: API_KEY_ID,
      keySecret: API_KEY_SECRET,
    },
    hostname: 'api.speechflow.io',
    path: '/asr/file/v1/create?lang=' + LANG,
  });
  createRequest.write(formDataBuffer);
}

function getFileNameByPath(path) {
  let index = path.lastIndexOf('/');
  return path.substring(index + 1);
}
createRequest.on('response', (createResponse) => {
  let responseData = '';

  createResponse.on('data', (chunk) => {
    responseData += chunk;
  });

  createResponse.on('end', () => {
    let taskId;
    const responseJSON = JSON.parse(responseData);
    console.log(responseJSON);
    if (responseJSON.code == 10000) {
      taskId = responseJSON.taskId;
    } else {
      console.log('create error:');
      console.log(responseJSON.msg);
      return;
    }

    let intervalID = setInterval(() => {
      const queryRequest = https.request(
        {
          method: 'GET',
          headers: {
            keyId: 'dZLKY1vC9Zcv7Bzi',
            keySecret: 'ixWlWhxP9RpHN5cP',
          },
          hostname: 'api.speechflow.io',
          path:
            '/asr/file/v1/query?taskId=' +
            taskId +
            '&resultType=' +
            RESULT_TYPE,
        },
        (queryResponse) => {
          let responseData = '';

          queryResponse.on('data', (chunk) => {
            responseData += chunk;
          });

          queryResponse.on('end', () => {
            const responseJSON = JSON.parse(responseData);
            if (responseJSON.code === 11000) {
              console.log('transcription result:');
              console.log(responseData);
              clearInterval(intervalID);
            } else if (responseJSON.code == 11001) {
              console.log('waiting');
            } else {
              console.log(responseJSON);
              console.log('transcription error:');
              console.log(responseJSON.msg);
              clearInterval(intervalID);
            }
          });
        }
      );

      queryRequest.on('error', (error) => {
        console.error(error);
      });
      queryRequest.end();
    }, 3000);
  });
});

createRequest.on('error', (error) => {
  console.error(error);
});

createRequest.write(createData);
createRequest.end();
