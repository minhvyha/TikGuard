'use client';
import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import TextInput from '@/components/TextInput';
import MainInput from '@/components/MainInput';
import Report from '@/components/Report';
import { useStore } from '@/app/context/context';




const page = () => {
  const { text } = useStore();
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

  function analyse() {
    fetch('http://localhost:3000/expertai/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: text }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className='flex flex-col gap-2 py-5'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-text-100'>ExpertAI</h1>
        <h2 className='text-text-150'>Advanced natural language API for understanding and analyzing text.</h2>
      </div>
    <div className="flex flex-row gap-4 p-6 ">
      <div className='flex-1 flex flex-col gap-4'>
        <div className='flex'>
          <MainInput />
        </div>
        <div className='flex flex-row gap-2'>
        <TextInput />
        <Button
          variant="outlined"
          onClick={analyse}
        >
          Analyse
        </Button>

        </div>
      </div>
      <div className='flex-1'>
        <Report />
      </div>
    </div>
    </div>
  );
};

export default page;
