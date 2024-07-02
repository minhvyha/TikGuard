import React from 'react'
import CircularProgressBasic from '@/components/ImageAnalysePage/CircularProgressBasic'
import UrlInput from '@/components/ImageAnalysePage/UrlInput'
const page = () => {
  return (
    <div className='flex flex-row py-5'>
      <div className='flex-1'>
        <UrlInput apiRoute='/image/azurecontentmoderator/api' />
      </div>
      <div className='flex-1'>

      <CircularProgressBasic />
      </div>
    </div>
  )
}

export default page