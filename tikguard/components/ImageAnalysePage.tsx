'use client'
import React from 'react'
import ImageDisplay from './ImageAnalysePage/ImageDisplay'
import UrlInput from './ImageAnalysePage/UrlInput'
import ImageData from './ImageAnalysePage/ImageData'
import { useStore } from '@/app/context/context'

const ImageAnalysePage = () => {
  const {data} = useStore()
  console.log(data)
  return (
    <div className="flex p-6 flex-row gap-4 mt-4">
    <div className="flex-1 flex flex-col max-w-[49%]">
      <ImageDisplay />
      <UrlInput apiRoute="/image/azurecontentmoderator" />
    </div>
    <div className="flex-1 gap-4 flex flex-row">
      <ImageData title='Racism Classification' subtitle='Racism' value={data !== null ? data.racism ?? -1: -1} classification={data !== null ? data.isRacism ?? false: false} />
      <ImageData title='Sexual Content Classification' subtitle='Sexual Content' value={data !== null ? data.sexual ?? -1 : - 1} classification={data !== null ? data.isSexual ?? false: false} />

    </div>
  </div>
  )
}

export default ImageAnalysePage