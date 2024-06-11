'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import DemoCard from './DemoCard'

const Main = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  function search(){
    router.push(`/recipe?search=${searchTerm}`)
  }
  return (
    <div className='flex justify-center flex-col items-center w-full py-8 gap-2 '>
<DemoCard />
    </div>
  )
}

export default Main