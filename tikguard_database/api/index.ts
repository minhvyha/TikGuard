require('dotenv').config();
import { ReportModel } from "../models/ReportModel";
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const https = require('https');
const querystring = require('querystring');
const { randomUUID } = require('crypto');


app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});
app.use(express.urlencoded({ extended: true }));
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get(
  '/findReport/:id',
  (req, res) => {
    const query = ReportModel.findOne({
      id: req.params.id,
    });
    query.exec(function (err, report) {
      if (report === null) {
        res.status(401).json('Cannot find report')
      }
      res.json(report);
    });
    // console.log(user);
  }
);

app.post('/transcribe', async (req, res) => {
  const data = req.body;

    const LANG = 'en';
    // The local path or remote path of media file.
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
      FILE_PATH +
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
  
  
  
    createRequest.on('response', (createResponse): void => {
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
          const queryRequest = https.request(
            {
              method: 'GET',
              headers: {
                keyId: process.env.APIKEYID,
                keySecret: process.env.APIKEYSECRET,
              },
              hostname: 'api.speechflow.io',
              path: '/asr/file/v1/query?taskId=' + taskId + '&resultType=' + 4,
            },
            (queryResponse): void => {
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
                  const newReport = new ReportModel({
                    id: boundary,
                    result:responseJSON.result,
                  });
                  await newReport.save()
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
  }
);

app.post(
  '/addReport',
  async (req, res) => {
    const report = req.body;
    const newReport = new ReportModel(report);
    await newReport.save()
    res.json(newReport);
  }
);

connectDB().then(() => {
  app.listen(3000, () => {
    console.log('listening for requests on Port: ' + 3000);
  });
});


module.exports = app;