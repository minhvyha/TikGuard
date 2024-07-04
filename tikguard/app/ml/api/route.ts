import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try{

    const data = await request.json();
    const text = data.text;
    const res = await fetch("https://hate-detection-app-1-973e6bace837.herokuapp.com/predict", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text }),
    })
    let jsonData = await res.json()
  
  
    return NextResponse.json({data : jsonData});
  }
  catch(err){
    return NextResponse.json({error: err});
  }
  }