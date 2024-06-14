'use client'

import React, { useState } from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import { apiPage } from '@/constant'
import DemoCard from './DemoCard'

const Main = () => {
  // const router = useRouter()
  // const [searchTerm, setSearchTerm] = useState('')
  // function search(){
  //   router.push(`/recipe?search=${searchTerm}`)
  // }
  let DemoCards = apiPage.map((api, index) => {
    return (
      <Link key={index} href={` ${api.path}`}>
        {api.name}
      </Link>
    )
  })
  return (
    <div className='flex justify-center flex-col items-center w-full py-8 gap-2 '>
      <DemoCard />
      {DemoCards}
    </div>
  )
}

export default Main