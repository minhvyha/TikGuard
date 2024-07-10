import { NextRequest, NextResponse } from 'next/server';
// Load the .env file if it exists
export const dynamic = 'force-dynamic'; // <- add this to force dynamic render
export const maxDuration = 60;
function percentageFormatter(num: number) {
  return new Intl.NumberFormat('default', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}
export async function GET(request: NextRequest) {
  try {
    console.log(123);
    let url = request.nextUrl.searchParams.get('url') ?? '';

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key':
        process.env.AZURE_CONTENT_MODERATOR_KEY ?? '',
    });

    const result = await fetch(
      'https://minh1.cognitiveservices.azure.com/contentmoderator/moderate/v1.0/ProcessImage/Evaluate',
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          Value: url,
          DataRepresentation: 'URL',
        }),
      }
    );
    const data = await result.json();
    let returnData = {
      isRacism: data.IsImageRacyClassified,
      racism: percentageFormatter(data.RacyClassificationScore * 100),
      isSexual: data.IsImageAdultClassified,
      sexual: percentageFormatter(data.AdultClassificationScore * 100),
    };
    return NextResponse.json(returnData);
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error });
  }
}
