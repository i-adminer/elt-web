'use client'
import React from 'react'
import Image from 'next/image'

const Dedicated = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden py-10 md:py-16'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-center'>
          <Image
            src='/images/dedicated/spiral.svg'
            height={272}
            width={686}
            alt='spiral-design'
            className='absolute left-0 top-0 hidden lg:block -z-10'
          />
          {/* Left Column */}
          <div className='col-span-12 lg:col-span-6 justify-self-center'>
            <div className='relative max-w-md mx-auto lg:max-w-none'>
              <Image
                src='/images/founder/ceo.png'
                alt='Mr. Ephraim John - Founder & CIO'
                width={500}
                height={600}
                className='mx-auto md:mx-0 rounded-2xl md:rounded-3xl shadow-2xl w-full h-auto'
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className='col-span-12 lg:col-span-6 px-4 md:px-0'>
            <div className='relative'>
              <Image
                src='/images/dedicated/comma.svg'
                alt='comma-image'
                width={200}
                height={106}
                className='absolute -top-10 md:-top-16 -left-20 md:-left-32 hidden lg:block'
              />
            </div>
            <h2 className='text-center lg:text-start lg:leading-20 leading-tight text-3xl md:text-4xl'>
              &ldquo;Dedicated to ICT excellence.&rdquo;
            </h2>
            <p className='text-lg md:text-xl font-medium text-black/55 mt-4 md:mt-5 text-center lg:text-start'>
              With extensive expertise in information technology, cybersecurity, and data protection, we are committed to providing reliable ICT solutions that empower businesses across East Africa to thrive in the digital age.
            </p>
            <div className='mt-8 md:mt-12'>
              <h5 className='lg:pl-32 relative lg:before:block before:hidden before:absolute before:bg-primary before:h-0.5 before:w-24 before:left-0 before:bottom-1/2 text-center lg:text-start font-bold text-black text-xl'>
                Mr. Ephraim John
              </h5>
              <p className='text-base md:text-lg text-primary font-semibold mt-2 lg:pl-32 text-center lg:text-start'>
                Founder & CIO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dedicated
