'use client';
import React, {useState} from 'react';
import TextAnalysePage from '@/components/TextAnalysePage';
import Header from '@/components/Header';
import BasicSelect from '@/components/BasicSelect';
import { languageCode } from '@/constant';
const page = () => {
  let [language, setLanguage] = useState('en');
  let [model, setModel] = useState('mlbasedsightengine');

  let modelList = [

    { value: 'mlbasedsightengine', label: 'ML Based Sight Engine' },
    { value: 'rulebasedsightengine', label: 'Rule Based Sight Engine' },
  ];

  let languageList = languageCode.map((item) => {
    return {
      value: item.code,
      label: item.name + ' ' + `(${item.native})`,
    };
  });
  return (
    <div className="flex flex-col gap-2 py-5 dark:text-white text-black dark:bg-black bg-white">
      <Header page="sightengine" />
      <div className="flex flex-row p-6 pb-0">
        <div className="flex-1 pr-4">
          <BasicSelect list={languageList} value={language} callback={setLanguage} />
          <BasicSelect list={modelList} value={model} callback={setModel} />

        </div>
        <div className="flex-1"></div>
      </div>
      <TextAnalysePage page="mlbasedsightengine" />
    </div>
  );
};

export default page;
