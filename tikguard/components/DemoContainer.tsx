import React from 'react'
import DemoCard from './DemoCard'

const DemoContainer = ({api} : {api: any[]}) => {
  let DemoCards = api.map((info, index) => {
    return (
      <DemoCard key={index} category={info.category} title={info.name} path={info.path} description={info.description} url={info.url}/>

    )
  })
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-gray-400'>subtitle</p>
        <h2 className='text-5xl text-white font-black'>Header</h2>
      </div>
      <div className={`grid ${api.length < 2 ? 'grid-cols-1' : 'grid-cols-2'} gap-6 pt-6`}>
        {DemoCards}
      </div>
    </div>
  )
}

export default DemoContainer