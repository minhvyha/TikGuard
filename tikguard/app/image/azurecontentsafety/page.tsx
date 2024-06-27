'use client'
import React from 'react'

const page = () => {
  async function test() {
    const res = await fetch('/image/azurecontentsafety/api', {
      method: 'GET'
    })
    const data = await res.json()
    console.log(data)
  }
  return (
    <div>
      <button onClick={test}>test</button>
    </div>
  )
}

export default page