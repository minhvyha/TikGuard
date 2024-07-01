// // this example uses axios and form-data
const axios = require('axios');
const FormData = require('form-data');
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let {text, language} = await request.json()
  let data = new FormData();
  data.append('text', text);
  data.append('lang', language);
  data.append('models', 'general,self-harm');
  data.append('mode', 'ml');
  data.append('api_user', process.env.SIGHTENGINE_USER);
  data.append('api_secret', process.env.SIGHTENGINE_SECRET);

  try {

    const response = await axios({
      url: 'https://api.sightengine.com/1.0/text/check.json',
      method: 'post',
      data: data,
      headers: data.getHeaders(),
    });

    const res = await response.data.moderation_classes;

    delete res.available
    console.log(res)
    let returnData = []
    for (const [key, value] of Object.entries(res)) {
      returnData.push({label: key, severity: value})
    }
    return NextResponse.json({data: returnData });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error });
  }
}
