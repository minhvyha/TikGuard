'use client';
import React from 'react';
import TextAnalysePage from '@/components/TextAnalysePage';
import Header from '@/components/TextAnalysePage/Header';
import SightEngineSwitch from '@/components/TextAnalysePage/SightEngineSwitch';
const page = () => {


  return (
    <div className="flex flex-col gap-2 py-5 dark:text-white text-black dark:bg-black bg-white">
      <Header page="sightengine" />
      <div className="flex flex-row p-6 pb-0">
      <SightEngineSwitch page='ml' />

        <div className="flex-1"></div>
      </div>
      <TextAnalysePage page="sightengine/ml" />
    </div>
  );
};

export default page;
