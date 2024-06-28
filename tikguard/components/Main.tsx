'use client'

import React, { useState } from 'react'
import { textApiPage, imageApiPage, aiApiPage } from '@/constant'
import DemoContainer from './DemoContainer'

const Main = () => {

  return (
    <div className='flex justify-center flex-col items-center w-full py-8 gap-2 '>
      <DemoContainer api={textApiPage} />
      <DemoContainer api={imageApiPage} />
      <DemoContainer api={aiApiPage} />

    </div>
  )
}

export default Main