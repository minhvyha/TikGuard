'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Main = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  function search(){
    router.push(`/recipe?search=${searchTerm}`)
  }
  return (
    <div className='flex justify-center flex-col items-center w-full py-8 gap-2 '>
      <Link href='/' className='text-center flex flex-col gap-2'>
        <h1 className='text-3xl'>TikGuard</h1>
      </Link>
      <div className="">
        <input type="text" value={searchTerm} onChange={(e) =>{
          setSearchTerm(e.target.value)}} placeholder="Search..." />
        <button onClick={search}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  )
}

export default Main