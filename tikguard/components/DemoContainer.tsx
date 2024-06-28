import React from 'react'
import DemoCard from './DemoCard'

const DemoContainer = ({api} : {api: any[]}) => {
  let DemoCards = api.map((info, index) => {
    return (
      <DemoCard key={index} category={info.category} title={info.name} path={info.path} description={info.description} url={info.url}/>

    )
  })
  return (
    <div className='grid grid-cols-2 gap-6'>
      {DemoCards}
    </div>
  )
}

export default DemoContainer