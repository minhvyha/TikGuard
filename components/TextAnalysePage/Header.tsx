'use client'
import React from 'react'
import { header } from '@/constant'

const Header = ({page} : {page: string}) => {

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl'>{header[page as keyof typeof header].title}</h1>
        <h2 className='text-text-150'>{header[page as keyof typeof header].description}</h2>
      </div>
  )
}

export default Header