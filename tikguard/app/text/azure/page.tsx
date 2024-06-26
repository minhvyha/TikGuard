'use client'
import React from 'react'
import TextInput from '@/components/TextInput';
import MainInput from '@/components/MainInput';
import Report from '@/components/Report';
const page = () => {
  return (
    <div className='flex flex-col gap-2 py-5 dark:text-white text-black dark:bg-black bg-white'>
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>ExpertAI</h1>
      <h2 className='text-text-150'>Advanced natural language API for understanding and analyzing text.</h2>
    </div>
  <div className="flex flex-row gap-4 p-6 ">
    <div className='flex-1 flex flex-col gap-4'>
      <div className='flex'>
        <MainInput apiRoute='text/azure' />
      </div>
      <div className='flex flex-row gap-2'>
      <TextInput />

      </div>
    </div>
    <div className='flex-1'>
      <Report page='azure' />
    </div>
  </div>
  </div>
  )
}

export default page