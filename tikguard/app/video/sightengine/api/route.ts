import { NextResponse } from 'next/server';

var sightengine = require('sightengine')('92303675', 'Vf3ZZrMqeJBScK2XoBPk8YZ35JubduBK');

export async function GET() {
  const result = await sightengine.check(['nudity-2.1,weapon,alcohol,recreational_drug,medical,offensive,text-content,gore-2.0,qr-content,tobacco,violence,self-harm,money,gambling']).video_sync('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4')
  return NextResponse.json({data : result});
}
