'use client';
import React, { useEffect } from 'react';
import MainInput from './TextAnalysePage/MainInput';
import TextInput from './TextAnalysePage/TextInput';
import Report from './TextAnalysePage/Report';
import { useStore } from '@/app/context/context';
import { usePathname } from 'next/navigation';
const TextAnalysePage = ({ page }: { page: string }) => {
  const pathname = usePathname();

  const { setData } = useStore();
  useEffect(() => {
    return () => {
      setData(null);
    };
  }, [pathname]);
  return (
    <div className="flex flex-row gap-4 p-6 ">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex">
          <MainInput apiRoute={'text/' + page} />
        </div>
        <div className="flex flex-row gap-2">
          <TextInput />
        </div>
      </div>
      <div className="flex-1">
        <Report page={page} />
      </div>
    </div>
  );
};

export default TextAnalysePage;
