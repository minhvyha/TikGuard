'use client';
import React from 'react';
import TextAnalysePage from '@/components/TextAnalysePage';
import Report from '@/components/TextAnalysePage/Report';
import Header from '@/components/Header';

const page = () => {
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

  function test() {
    fetch('http://localhost:3000/test/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: 'I hate you',
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div className="flex flex-col gap-2 py-5 dark:text-white text-black dark:bg-black bg-white">
      <Header page="expertai" />
      <TextAnalysePage page="expertai" />
    </div>
  );
};

export default page;
