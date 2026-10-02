'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Join = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleWorkWithUs = () => {
    // Build query string with whatever the user typed — even partial
    const params = new URLSearchParams()
    if (name.trim()) params.set('name', name.trim())
    if (email.trim()) params.set('email', email.trim())
    const qs = params.toString()
    router.push(`/contact${qs ? `?${qs}` : ''}`)
  }

  return (
    <section className='overflow-hidden bg-joinus'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            Get Started
          </p>
          <h2 className='my-6'>Ready to take the stress out of IT?</h2>
          <p className='text-black/50 text-base font-normal max-w-3xl mx-auto'>
            Join hundreds of businesses across East Africa that trust EasyLink
            Technologies for reliable, professional ICT support. Let us handle
            the technology so you can focus on growth.
          </p>
        </div>

        <div className='mx-auto max-w-4xl pt-5'>
          <div className='flex flex-col sm:flex-row items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-grey sm:rounded-full'>
            <div className='w-full sm:flex-1'>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full my-4 py-4 sm:pl-6 lg:text-xl text-black bg-transparent pl-1 focus:outline-none focus:text-black'
                placeholder='Your name'
                autoComplete='name'
                onKeyDown={(e) => e.key === 'Enter' && handleWorkWithUs()}
              />
            </div>
            <div className='w-full sm:flex-1'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-transparent focus:outline-none focus:text-black'
                placeholder='Your email'
                autoComplete='email'
                onKeyDown={(e) => e.key === 'Enter' && handleWorkWithUs()}
              />
            </div>
            <div className='w-full sm:w-auto sm:mr-3 mt-2 sm:mt-0 flex-shrink-0'>
              <button
                type='button'
                onClick={handleWorkWithUs}
                className='w-full sm:w-auto text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-[var(--color-accent)] py-5 px-10 hover:bg-[var(--color-primary)] duration-300 block whitespace-nowrap cursor-pointer'
              >
                Work with Us!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join
