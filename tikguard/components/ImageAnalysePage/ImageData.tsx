import React from 'react'
import CircularProgressBasic from './CircularProgressBasic'
const ImageData = () => {
  return (
    <div className='flex-1 p-3 border-2 cursor-pointer border-background-500 dark:border-gray-500 border-solid text-xs rounded'>

        <CircularProgressBasic value={50} />
    </div>
  )
}

export default ImageData