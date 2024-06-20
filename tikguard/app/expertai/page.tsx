'use client';
import React, { useEffect } from 'react';
import { useStore } from '@/app/context/context';

import { NLClient } from '@expertai/nlapi';
import { Language } from '@expertai/nlapi';
import DropZone from '@/components/DropZone';

var nlClient = new NLClient();

async function getUser() {
  const res = await fetch('http://localhost:3000/expertai/api');
  const data = await res.json();
  console.log(data);
}

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
        <button onClick={getUser}>test</button>
        {error && <p>{error}</p>}
        <DropZone />
      </div>
    </div>
  );
};

export default page;
