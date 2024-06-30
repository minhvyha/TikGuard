// // this example uses axios and form-data
const axios = require('axios');
const FormData = require('form-data');
// import { NextRequest } from 'next/server';
// import { NextResponse } from 'next/server';

// export async function GET(request: NextRequest) {
// let data = new FormData();
// data.append('text', 'You are ṣẗ_ȕ_ṕıď');
// data.append('lang', 'en');
// data.append('categories', 'profanity,personal,link,drug,weapon,spam,content-trade,money-transaction,extremism,violence,self-harm,medical');
// data.append('mode', 'rules');
// data.append('api_user', '{api_user}');
// data.append('api_secret', '{api_secret}');

// const response = await axios({
//   url: 'https://api.sightengine.com/1.0/text/check.json',
//   method:'post',
//   data: data,
//   headers: data.getHeaders()
// })
//   return NextResponse.json(response.data);
// }

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  let data = new FormData();
  data.append('text', 'You are ṣẗ_ȕ_ṕıď');
  data.append('lang', 'en');
  data.append(
    'categories',
    'profanity,personal,link,drug,weapon,spam,content-trade,money-transaction,extremism,violence,self-harm,medical'
  );
  data.append('mode', 'rules');
  data.append('api_user', '{api_user}');
  data.append('api_secret', '{api_secret}');

  try {
    let url = request.nextUrl.searchParams.get('url') ?? '';

    const response = await axios({
      url: 'https://api.sightengine.com/1.0/text/check.json',
      method: 'post',
      data: data,
      headers: data.getHeaders(),
    });

    const res = await response.json();

    return NextResponse.json(res);
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error });
  }
}
