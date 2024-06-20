'use client';
import React from 'react';
import { useStore } from '@/app/context';

import { NLClient } from '@expertai/nlapi';
import { Language } from '@expertai/nlapi';
import DropZone from '@/components/DropZone';
import Report from '@/components/Report';
var nlClient = new NLClient();



const page = () => {
  const {error} = useStore()
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
        {error && <p>{error}</p>}
        <DropZone />
      </div>
      <Report />
    </div>
  );
};

export default page;
