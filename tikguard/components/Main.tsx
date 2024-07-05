'use client'

import React  from 'react'
import { textApiPage, imageApiPage, aiApiPage, videoApiPage } from '@/constant'
import DemoContainer from './DemoContainer'
import Contact from './Contact'
const Main = () => {

  return (
    <div className='flex justify-center flex-col items-center w-full py-8 gap-12 pb-24'>
      <DemoContainer id='text' api={textApiPage} title='Text Analysis API' subtitle='Detect and Prevent Hate Speech Effectively' />
      <DemoContainer id='image' api={imageApiPage} title='Image Analysis API' subtitle='Identify and Block Hateful Visual Content' />
      <DemoContainer id='video' api={videoApiPage} title='Video Analysis API' subtitle='Analyze and Filter Hateful Video Content' />
      <DemoContainer id='ml' api={aiApiPage} title='Our Machine Learning Model' subtitle='Prevent Hate Speech with Precision with'/>
      <Contact />
    </div>
  )
}

export default Main