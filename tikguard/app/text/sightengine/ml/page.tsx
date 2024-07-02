'use client';
import React from 'react';
import TextAnalysePage from '@/components/TextAnalysePage';
import Header from '@/components/TextAnalysePage/Header';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Language from '@/components/TextAnalysePage/Language';
const page = () => {


 
  return (
    <div className="flex flex-col gap-2 py-5 dark:text-white text-black dark:bg-black bg-white">
      <Header page="sightengine" />
      <div className="flex flex-row p-6 pb-0">
        <div className="flex-1 pr-4 flex flex-row gap-3">
          <Link className="flex" href="/text/sightengine/ml">
            <Button variant="outlined" color="success">
              ML Model
            </Button>
          </Link>
          <Link className="flex" href="/text/sightengine/rule">
            <Button variant="outlined">Rule-based Model</Button>
          </Link>

          <Language />

        </div>
        <div className="flex-1"></div>
      </div>
      <TextAnalysePage page="sightengine/ml" />
    </div>
  );
};

export default page;
