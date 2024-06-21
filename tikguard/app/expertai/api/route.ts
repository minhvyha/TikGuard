import { NLClient } from '@expertai/nlapi';
import { Language } from '@expertai/nlapi';
import { NextResponse } from 'next/server';

const nlClient = new NLClient();
export async function POST(request: Request) {
  const data = await request.json();
  const text = data.text;

  let result = await nlClient.detect(text, {
      language: Language.EN,
      detector: "hate-speech",
    });
    return NextResponse.json({data : result.data});
  }