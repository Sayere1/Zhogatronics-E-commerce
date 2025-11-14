import { assets } from '@/assets/assets'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NewsLetter from '@/components/NewsLetter'
import Image from 'next/image'
import React from 'react'


const AboutUs = () => {
  return (

    <>
    <Navbar />
    <div className='flex flex-col items-start px-6 md:px-16 lg:px-32'>
      <div className='text-2xl text-center pt-8 border-t'>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <Image src={assets.cannon_camera_image} alt="" className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumy</p>
        <p>dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumy</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumydummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumy</p>
    
        </div>
      </div>
      <div className='text-xl py-4'>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5 flex'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumydummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumy</p>

        </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5 flex'>
          <b>Convienence:</b>
          <p className='text-gray-600'>dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumydummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumy</p>
          
        </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5 flex'>
          <b>Exemptional costumer service:</b>
          <p className='text-gray-600'>dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumydummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy duumy</p>
          
        </div>
      </div>

    </div>

    <NewsLetter />

    <Footer />
    </>
  )
}

export default AboutUs
