'use client';
import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import TextInput from '@/components/TextInput';
import MainInput from '@/components/MainInput';
import Report from '@/components/Report';

import { NLClient } from '@expertai/nlapi';
import { Language } from '@expertai/nlapi';

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
  function transcribe() {
    fetch('http://localhost:3000/expertai/api', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div className="flex flex-row gap-4 p-6 ">
      <div className='flex-1 flex flex-col gap-4'>
        <div className='flex'>
          <MainInput />
        </div>
        <div className='flex flex-row gap-2'>
        <TextInput />
        <Button
          variant="outlined"
          // onClick={() => {
          //   setTaskId('123');
          // }}
        >
          Analyse
        </Button>

        </div>
      </div>
      <div className='flex-1'>
        <Report />
      </div>
    </div>
  );
};

export default page;
