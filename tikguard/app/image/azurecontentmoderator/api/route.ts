
import { NextRequest, NextResponse } from "next/server";
// Load the .env file if it exists
export const dynamic = 'force-dynamic'; // <- add this to force dynamic render
export const maxDuration = 60; 

export async function GET(request: NextRequest) {
  try {
    console.log(123)
    let url = request.nextUrl.searchParams.get('url') ?? '';

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': process.env.AZURE_CONTENT_MODERATOR_KEY ?? '',
    });

    const result = await fetch(
      'https://minh1.cognitiveservices.azure.com/contentmoderator/moderate/v1.0/ProcessImage/Evaluate',
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          Value: url,
          DataRepresentation: "URL",
        }),
      }
    );
    const data = await result.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error });
  }
}
