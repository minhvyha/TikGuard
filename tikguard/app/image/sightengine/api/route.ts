import { NextRequest, NextResponse } from 'next/server';
const axios = require('axios');

export async function GET(request: NextRequest) {
  try {
    let url = request.nextUrl.searchParams.get('url') ?? '';

    const result = await fetch(
      'https://api.sightengine.com/1.0/check.json?' +
        new URLSearchParams({
          url: url,
          models:
            'nudity-2.1,weapon,alcohol,recreational_drug,medical,offensive,text-content,gore-2.0,qr-content,tobacco,violence,self-harm,money,gambling',
          api_user: '92303675',
          api_secret: 'Vf3ZZrMqeJBScK2XoBPk8YZ35JubduBK',
        }),
      {
        method: 'GET',
      }
    );
    const data = await result.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error });
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as Blob;
  let data = new FormData();
  data.append('media', file);
  data.append(
    'models',
    'nudity-2.1,weapon,alcohol,recreational_drug,medical,offensive,text-content,gore-2.0,qr-content,tobacco,violence,self-harm,money,gambling'
  );
  data.append('api_user', '92303675');
  data.append('api_secret', 'Vf3ZZrMqeJBScK2XoBPk8YZ35JubduBK');

  const response = await axios({
    method: 'post',
    url: 'https://api.sightengine.com/1.0/check.json',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
      models:
        'nudity-2.1,weapon,alcohol,recreational_drug,medical,offensive,text-content,gore-2.0,qr-content,tobacco,violence,self-harm,money,gambling',
    },
  });

  return NextResponse.json(response.data);
}
