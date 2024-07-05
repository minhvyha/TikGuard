import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
      <video height="452" width="768" controls >
          <source src="https://ik.imagekit.io/ikmedia/example_video.mp4" />
          Your browser does not support the video tag...
        </video>
    </div>
  )
}

export default page