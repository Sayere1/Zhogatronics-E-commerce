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

                        <div className="flex text-center pt-12">
                    <p className="text-2xl font-medium">About Us</p>
                  
                </div>
        <div className='text-2xl text-center pt-8 border-t'>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <Image src={assets.cannon_camera_image} alt="" className='w-full md:max-w-[450px]' />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At Zhogatronics, we believe technology isn’t just about gadgets—it’s about empowering lives.
              From the latest smartphones and smart home devices to everyday essentials like chargers and headphones,
              we curate electronics that make life simpler, smarter, and more connected.</p>
            <p>    We’re more than an online store—we’re a community of innovators, dreamers, and doers who see electronics
              as tools for progress. Every product we offer is carefully selected for quality, reliability, and value,
              so you can shop with confidence knowing you’re getting the best</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>
              Our mission is simple yet powerful:
              <ul className="list-disc pl-6">
<li>
              Democratize technology by making cutting edge electronics accessible to everyone.
              </li>

           <li>   Champion sustainability by partnering with ecofriendly brands and offering energy efficient products.
            </li>

           <li>   Empower customers with knowledge, transparent pricing, and exceptional service.</li>


              </ul>
                            We envision a world where technology bridges gaps, sparks creativity, and
              drives positive change. Whether you’re upgrading your workspace, enhancing your entertainment, 
              or exploring smart living,
              we’re here to help you unlock the future—one device at a time.
            </p>

          </div>
        </div>
        <div className='text-xl py-4'>

        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border rounded px-10 md:px-16 py-8 sm:py-20 flex-col gap-5 flex'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Every product we sell undergoes rigorous quality checks to 
              ensure reliability, performance, and your peace of mind</p>

          </div>
          <div className='border rounded px-10 md:px-16 py-8 sm:py-20 flex-col gap-5 flex'>
            <b>Convienence:</b>
            <p className='text-gray-600'>Shop anytime, anywhere—with fast delivery and hassle free 
              service designed around your lifestyle.</p>

          </div>
          <div className='border rounded px-10 md:px-16 py-8 sm:py-20 flex-col gap-5 flex'>
            <b>Exemptional costumer service:</b>
            <p className='text-gray-600'>“Our dedicated support team is here to guide you at every step,
               ensuring a seamless shopping experience</p>

          </div>
        </div>

      </div>

      <NewsLetter />

      <Footer />
    </>
  )
}

export default AboutUs
