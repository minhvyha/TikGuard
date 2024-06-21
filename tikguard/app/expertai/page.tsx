'use client';
import React, { useEffect } from 'react';

import { NLClient } from '@expertai/nlapi';
import { Language } from '@expertai/nlapi';
import DropZone from '@/components/DropZone';

var nlClient = new NLClient();



const page = () => {

  
  // console.log(process.env.EAI_USERNAME)
  // console.log(process.env.EAI_PASSWORD)
  // nlClient.detect(text, {
  //   language: Language.EN,
  //   detector: "hate-speech",
  // }).then((result) => {
  //   console.log(result.data?.categories)
  // })
  return (
    <div className="flex flex-row">
      <div>
        <button onClick={() =>{
          fetch('http://localhost:3000/expertai/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text: "I hate you",
            }),
          }).then((response) => {
            return response.json();
          }).then((data) => {
            console.log(data)
          
          })
        }}>test</button>
        <DropZone />
      </div>
    </div>
  );
};

export default page;
