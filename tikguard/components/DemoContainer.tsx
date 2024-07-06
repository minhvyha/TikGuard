import React from 'react'
import DemoCard from './DemoCard'

const DemoContainer = ({api, id, title, subtitle} : {api: any[], id:string, title:string, subtitle:string}) => {
  let DemoCards = api.map((info, index) => {
    return (
      <DemoCard key={index} category={info.category} title={info.name} path={info.path} description={info.description} url={info.url}/>

    )
  })
  return (
    <div id={id} className='flex flex-col pt-[80px]'>
      <div className='flex flex-col justify-center items-center'>
        <p className='dark:text-gray-400 text-gray-600'>{subtitle}</p>
        <h2 className='text-5xl text-gray-800 dark:text-white font-black'>{title}</h2>
      </div>
      <div  className={` ${api.length < 2 ? 'flex justify-center' : 'grid grid-cols-2'} gap-6 pt-10`}>
        {DemoCards}
      </div>
    </div>
  )
}

export default DemoContainer