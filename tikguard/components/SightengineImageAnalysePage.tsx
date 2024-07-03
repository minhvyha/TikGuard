import React from 'react'
import ImageDisplay from './ImageAnalysePage/ImageDisplay'
import UrlInput from './ImageAnalysePage/UrlInput'
import ImageData from './ImageAnalysePage/ImageData'
import { useStore } from '@/app/context/context'

const SightengineImageAnalysePage = () => {
  return (
    <div className="flex p-6 flex-row gap-4 mt-4">
    <div className="flex-1 flex flex-col max-w-[49%]">
      <ImageDisplay />
      <UrlInput apiRoute="/image/sightengine" />
    </div>
    <div className="flex-1 gap-4 flex flex-row">

    </div>
  </div>
  )
}

export default SightengineImageAnalysePage