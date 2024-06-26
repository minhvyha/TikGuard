
import { NextRequest, NextResponse } from "next/server";
// Load the .env file if it exists
export const dynamic = 'force-dynamic'


export async function GET(request: NextRequest) {
  try {
    let url = request.nextUrl.searchParams.get('url') ?? '';

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': process.env.AZURE_CONTENT_MODERATOR_KEY ?? '',
    });

    const result = await fetch(
      'https://api.sightengine.com/1.0/check.json',
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          url: url,
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
