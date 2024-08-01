"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {blogid} = useParams()
    console.log(blogid);
  return (
    <div>
        {blogid}
    </div>
  )
}

export default page