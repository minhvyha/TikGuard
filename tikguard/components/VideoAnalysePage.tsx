import React from 'react'
import VideoDisplay from './VideoAnalysePage/VideoDisplay'
import UrlInput from './VideoAnalysePage/UrlInput'
import Report from './VideoAnalysePage/Report'
const VideoAnalysePage = () => {
  return (
    <div className="flex p-6 flex-row gap-4 mt-4">
    <div className="flex-1 flex flex-col max-w-[49%]">
      <VideoDisplay />
      <UrlInput apiRoute="/image/sightengine" />
    </div>
    <div className="flex-1 gap-4 flex flex-row">
      <Report />
    </div>
  </div>
  )
}

export default VideoAnalysePage