'use client'

import React  from 'react'
import { textApiPage, imageApiPage, aiApiPage, videoApiPage } from '@/constant'
import DemoContainer from './DemoContainer'

const Main = () => {

  return (
    <div className='flex justify-center flex-col items-center w-full py-8 gap-12 pb-24'>
      <DemoContainer id='text' api={textApiPage} />
      <DemoContainer id='image' api={imageApiPage} />
      <DemoContainer id='video' api={videoApiPage} />
      <DemoContainer id='ml' api={aiApiPage} />

    </div>
  )
}

export default Main