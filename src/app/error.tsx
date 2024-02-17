'use client'

import React from 'react'

interface Props {}

const Error = ({}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-[512px] h-64 bg-pink-200 text-white rounded-full">
      <h1 className="text-6xl font-bold mb-4 text-red-600">[ERROR]</h1>
      <h2 className="text-4xl text-red-600">Oops..</h2>
    </div>
  )
}

export default Error
