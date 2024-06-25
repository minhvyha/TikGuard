const ContentSafetyClient = require("@azure-rest/ai-content-safety").default,
  { isUnexpected } = require("@azure-rest/ai-content-safety");
const { AzureKeyCredential } = require("@azure/core-auth");

import { NextResponse } from "next/server";
// Load the .env file if it exists


export async function POST(request) {
    // get endpoint and key from environment variables
    const data = await request.json();
    const text = data.text;
    const endpoint = process.env.CONTENT_SAFETY_ENDPOINT;
    const key = process.env.CONTENT_SAFETY_KEY;
    
    const credential = new AzureKeyCredential(key);
    const client = ContentSafetyClient(endpoint, credential);
    
    // replace with your own sample image file path 
    // const image_path = path.resolve(__dirname, "./resources/image.jpg");

    const analyzeTextOption = { text: text };
    const analyzeTextParameters = { body: analyzeTextOption };
    
    const result = await client.path("/text:analyze").post(analyzeTextParameters);
    
    if (isUnexpected(result)) {
        throw result;
    }
  //   for (let i = 0; i < result.body.categoriesAnalysis.length; i++) {
  //   const imageCategoriesAnalysisOutput = result.body.categoriesAnalysis[i];
  //   console.log(
  //     imageCategoriesAnalysisOutput.category,
  //     " severity: ",
  //     imageCategoriesAnalysisOutput.severity
  //   );
  // }
    return NextResponse.json(result.body);
}
