import { NextResponse } from 'next/server';
const ContentSafetyClient = require("@azure-rest/ai-content-safety").default,
  { isUnexpected } = require("@azure-rest/ai-content-safety");
const { AzureKeyCredential } = require("@azure/core-auth");

export async function POST(request: Request) {
  // Assuming the request is a ReadableStream
  const formData = await request.formData();
  console.log(formData.get('file'))
  const endpoint = process.env.CONTENT_SAFETY_ENDPOINT;
  const key = process.env.CONTENT_SAFETY_KEY;
  
  const credential = new AzureKeyCredential(key);
  const client = ContentSafetyClient(endpoint, credential);

  // Extracting the file from FormData
  const file = formData.get('file') as Blob;

  if (!file) {
    return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
  }

  // Reading the file content
  const fileContent = await file.arrayBuffer();
  const buffer = Buffer.from(fileContent);
  const base64Image = buffer.toString('base64'); // Assuming the file is a text file for simplicity

  const analyzeImageOption = { image: { content: base64Image } };
  const analyzeImageParameters = { body: analyzeImageOption };
  const result = await client.path("/image:analyze").post(analyzeImageParameters);
    
  if (isUnexpected(result)) {
      throw result;
  }



  return NextResponse.json({ message: "File content read successfully", result: result.body });
}