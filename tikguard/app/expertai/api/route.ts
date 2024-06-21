'use server';

import { AssemblyAI } from 'assemblyai';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const data = await request.json();

  const client = new AssemblyAI({
    apiKey: '8faf7a4d58eb4638a69d44a367f1f8dd',
  });
  const audioUrl = data.path;
  const config = {
    audio_url: 'https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3',
    language_detection: true,
  };

  const transcript = await client.transcripts.transcribe(config);
  console.log(transcript.text);
  return NextResponse.json({ text: transcript.text });
}
