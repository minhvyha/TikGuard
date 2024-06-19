import React from 'react';

import { NLClient } from '@expertai/nlapi';
import { Language } from '@expertai/nlapi';
import DropZone from '@/components/DropZone';
import Report from '@/components/Report';
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
      
        <DropZone />
      </div>
      <Report />
    </div>
  );
};

export default page;
