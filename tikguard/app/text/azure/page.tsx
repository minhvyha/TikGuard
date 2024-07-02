'use client';
import React from 'react';
import TextAnalysePage from '@/components/TextAnalysePage';
import Header from '@/components/TextAnalysePage/Header';
const page = () => {
  return (
    <div className="flex flex-col gap-2 py-5 dark:text-white text-black dark:bg-black bg-white">
      <Header page="azure" />
      <TextAnalysePage page="azure" />
    </div>
  );
};

export default page;
