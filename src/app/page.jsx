import Business from '@/components/Business/Business'
import Hero from '@/components/Hero/Hero'
import ImageList from '@/components/ImageList/ImageList'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <ImageList />
        <Business />
    </div>
  )
}

export default page