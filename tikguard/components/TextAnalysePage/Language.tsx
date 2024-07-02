'use client'
import React from 'react'
import BasicSelect from '../BasicSelect'
import { useStore } from '@/app/context/context';
import { languageCode } from '@/constant';
const Language = () => {
  const {language, setLanguage} = useStore();

  let languageList = languageCode.map((item) => {
    return {
      value: item.code,
      label: item.name + ' ' + `(${item.native})`,
    };
  });
  return (
    <BasicSelect
            list={languageList}
            value={language}
            callback={setLanguage}
          />
  )
}

export default Language