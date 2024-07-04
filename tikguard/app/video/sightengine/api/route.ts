import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'; // <- add this to force dynamic render
export const maxDuration = 60; 
var sightengine = require('sightengine')(process.env.VIDEO_USER, process.env.VIDEO_SECRET);

export async function GET(request: NextRequest) {
  try{

    let url = request.nextUrl.searchParams.get('url') ?? '';
  
    const result = await sightengine.check(['nudity-2.1,weapon,alcohol,recreational_drug,medical,offensive,text-content,gore-2.0,qr-content,tobacco,violence,self-harm,money,gambling']).video_sync(url)
    return NextResponse.json({data : result});
  }
  catch(err){
    console.error('Error uploading file:', err);
    return NextResponse.json({ error: err });
  }
}
