const { randomUUID } = require('crypto');

export const maxDuration = 60;

import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  const LANG = 'en';
  const data = await request.formData();
  const file = data.get('file') as File;
  const boundary: string = randomUUID().replace(/-/g, '');
  const FILE_PATH = (data.get('file') as File).name;
  let formData = new FormData();
  formData.append('file', file, FILE_PATH);

  const fileBlob = data.get('file') as Blob;
  const fileContent = await fileBlob.arrayBuffer();
  const buffer = Buffer.from(fileContent);
  let formDataTest = '';
  formDataTest += '--' + boundary + '\r\n';
  formDataTest +=
    'Content-Disposition: form-data; name="file"; filename="' +
    FILE_PATH +
    '"\r\n';
  formDataTest += 'Content-Type: application/octet-stream\r\n\r\n';

  let formDataBuffer: Buffer = Buffer.concat([
    Buffer.from(formDataTest, 'utf8'),
    buffer,
    Buffer.from('\r\n--' + boundary + '--\r\n', 'utf8'),
  ]);

  console.log(formDataBuffer);
  let createRequestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data; boundary=' + boundary,
      keyId: process.env.APIKEYID ?? '',
      keySecret: process.env.APIKEYSECRET ?? '',
    },
    body: formDataBuffer,
  };

  let createResponse = await fetch(
    `https://api.speechflow.io/asr/file/v1/create?lang=${LANG}`,
    createRequestOptions
  );

  if (!createResponse.ok) {
    return NextResponse.json({ error: await createResponse.text() });
  }

  const createResponseJSON: { code: number; taskId: string; msg: string } =
    await createResponse.json();
  let taskId: string;
  if (createResponseJSON.code == 10000) {
    taskId = createResponseJSON.taskId;
  } else {
    return NextResponse.json({ error: createResponseJSON.msg });
  }
  function getResult() {
    return new Promise((resolve, reject) => {
      let intervalID: ReturnType<typeof setInterval> = setInterval(async () => {
        let queryRequestOptions: RequestInit = {
          method: 'GET',
          headers: {
            keyId: process.env.APIKEYID,
            keySecret: process.env.APIKEYSECRET,
          } as HeadersInit,
        };

        let queryResponse = await fetch(
          `https://api.speechflow.io/asr/file/v1/query?taskId=${taskId}&resultType=4`,
          queryRequestOptions
        );

        if (!queryResponse.ok) {
          console.error(await queryResponse.text());
          clearInterval(intervalID);
          return NextResponse.json({ error: await queryResponse.text() });
        }

        const queryResponseJSON: { code: number; msg: string; result: string } =
          await queryResponse.json();

        if (queryResponseJSON.code === 11000) {
          clearInterval(intervalID);
          resolve(queryResponseJSON);
        } else if (queryResponseJSON.code == 11001) {
          console.log('waiting');
        } else {
          clearInterval(intervalID);
        }
      }, 3000);
    });
  }

  let result = await getResult();
  return NextResponse.json({ result });
}
