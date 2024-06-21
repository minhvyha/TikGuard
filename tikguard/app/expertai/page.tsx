'use client';
import React, { useEffect } from 'react';
import { useStore } from '@/app/context/context';

import { NLClient } from '@expertai/nlapi';
import { Language } from '@expertai/nlapi';
import DropZone from '@/components/DropZone';

var nlClient = new NLClient();



const page = () => {
  const { error } = useStore();

  
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
    </div>
  );
};

export default page;
