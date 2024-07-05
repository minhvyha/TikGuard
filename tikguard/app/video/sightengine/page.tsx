import React from 'react'
import VideoHeader from '@/components/VideoAnalysePage/VideoHeader'
import VideoAnalysePage from '@/components/VideoAnalysePage'
const page = () => {
  return (
    <div className='pt-20'>
      <VideoHeader />
      <VideoAnalysePage />
    </div>
  )
}

export default page