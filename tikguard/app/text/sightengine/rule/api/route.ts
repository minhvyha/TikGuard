// // this example uses axios and form-data
const axios = require('axios');
const FormData = require('form-data');
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let {text, language} = await request.json()
  let data = new FormData();
  data.append('text', text);
  data.append('lang', language);
  data.append(
    'categories',
    'profanity,personal,link,drug,weapon,spam,content-trade,money-transaction,extremism,violence,self-harm,medical'
  );
  data.append('mode', 'rules');
  data.append('api_user', '{api_user}');
  data.append('api_secret', '{api_secret}');

  try {

    const response = await axios({
      url: 'https://api.sightengine.com/1.0/text/check.json',
      method: 'post',
      data: data,
      headers: data.getHeaders(),
    });

    const res = await response.json();

    return NextResponse.json({data: res});
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error });
  }
}
