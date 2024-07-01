// // this example uses axios and form-data
const axios = require('axios');
const FormData = require('form-data');
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let {text, language} = await request.json()
  let data = new FormData();
  data.append('text', text);
  data.append('lang', language);
  data.append(
    'categories',
    'profanity,personal,link,drug,weapon,spam,content-trade,money-transaction,extremism,violence,self-harm,medical'
  );
  data.append('mode', 'rules');
  data.append('api_user', process.env.SIGHTENGINE_USER);
  data.append('api_secret', process.env.SIGHTENGINE_SECRET);

  try {

    const response = await axios({
      url: 'https://api.sightengine.com/1.0/text/check.json',
      method: 'post',
      data: data,
      headers: data.getHeaders(),
    });

    const res = await response.data;

    delete res.status
    delete res.request
    let returnData = []
    for (const [key, value] of Object.entries(res)) {
      console.log(value)
      if(value){
        var positions = (value as any).matches.map((item: any) => {
          return {start: item.start, end: item.end + 1} 
        });
        
      }
      returnData.push({label: key, severity: (value as { matches: any[] }).matches.length, positions: positions});
    }
    console.log(returnData)
    return NextResponse.json({data: returnData});
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error });
  }
}
