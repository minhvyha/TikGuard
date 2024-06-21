'use client';
import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import TextInput from '@/components/TextInput';

import { NLClient } from '@expertai/nlapi';
import { Language } from '@expertai/nlapi';
import MainInput from '@/components/MainInput';

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
    <div className="flex flex-row">
      <div>
        <div>
          <MainInput />
        </div>
        <div>
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
    </div>
  );
};

export default page;
