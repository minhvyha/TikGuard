import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const comment = data.text;
  const res = await fetch("https://hate-hound-api.vercel.app/api/predict", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ comment ,access_token: process.env.HATE_HOUNT_API }),
  })
  let jsonData = await res.json()
  let returnData = []
  for (const [key, value] of Object.entries(jsonData.prediction_probs)) {
    returnData.push({label: key, severity: `${(roundToHundredth(value as number)) * 100}%`})
  }
  

  return NextResponse.json({data : returnData});
  }

  const roundToHundredth = (value: Number) => {
    return Number(value.toFixed(2));
  };