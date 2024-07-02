'use client';
import React, { useEffect } from 'react';
import TextAnalysePage from '@/components/TextAnalysePage';
import Header from '@/components/TextAnalysePage/Header';
import BasicSelect from '@/components/BasicSelect';
import { languageCode } from '@/constant';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useStore } from '@/app/context/context';
import { usePathname } from 'next/navigation'

const page = () => {
  const pathname = usePathname()

  const {language, setLanguage, setData} = useStore();
  useEffect(() => {
    return () => {
      setData(null);
    };
  }, [pathname]);
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
        <div className="flex-1 pr-4 flex flex-row gap-3">
          <Link className='flex' href="/text/sightengine/ml">
            <Button variant="outlined" >ML Model</Button>
          </Link>
          <Link className='flex' href="/text/sightengine/rule">
            <Button variant="outlined" color="success">Rule-based Model</Button>
          </Link>

          <BasicSelect
            list={languageList}
            value={language}
            callback={setLanguage}
          />
        </div>
        <div className="flex-1"></div>
      </div>
      <TextAnalysePage page="sightengine/rule" />
    </div>
  );
};

export default page;
