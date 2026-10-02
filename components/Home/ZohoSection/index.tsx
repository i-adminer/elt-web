'use client'

import Image from 'next/image'
import { TransitionLink } from '@/components/Transitions/TransitionLink'
import { FaArrowRight } from 'react-icons/fa6'
import { ZOHO_ALL_SIGNUP_URL, ZOHO_PRODUCTS } from '@/data/zoho'

const ZohoSection = () => {
  return (
    <section
      id='zoho-solutions'
      className='py-20 bg-grey overflow-hidden'
      aria-labelledby='zoho-section-heading'
    >
      <div className='container mx-auto max-w-7xl px-4'>

        {/* Header row */}
        <div
          className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14'
          data-aos='fade-up'
          data-aos-duration='500'
        >
          <div>
            <p
              className='text-sm font-mono uppercase tracking-widest mb-3'
              style={{ color: 'var(--color-accent)' }}
            >
              Zoho Business Solutions
            </p>
            <h2
              id='zoho-section-heading'
              className='text-gray-900 text-3xl md:text-4xl font-bold leading-tight'
            >
              Power your business with Zoho
            </h2>
          </div>
          <TransitionLink
            href='/solutions/zoho'
            label='Zoho Solutions'
            className='inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-all group/link flex-shrink-0'
            style={{ color: 'var(--color-primary)' }}
          >
            <span className='group-hover/link:underline'>Explore all Zoho solutions</span>
            <FaArrowRight
              size={12}
              className='transition-transform duration-200 group-hover/link:translate-x-1'
              aria-hidden='true'
            />
          </TransitionLink>
        </div>

        {/* Main layout: brand card + product chips */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>

          {/* LEFT — Zoho brand card */}
          <div
            className='lg:col-span-1'
            data-aos='fade-right'
            data-aos-duration='500'
          >
            <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center gap-6'>
              <Image
                src='/images/partners/zoho.webp'
                alt='Zoho'
                width={160}
                height={60}
                className='object-contain w-auto h-auto max-h-16'
              />
              <p className='text-gray-600 text-sm leading-relaxed'>
                We help businesses across East Africa implement, configure, and support Zoho
                solutions from first setup to ongoing optimisation.
              </p>
              <div className='flex flex-col w-full gap-3'>
                <a
                  href={ZOHO_ALL_SIGNUP_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Get started with Zoho, opens Zoho sign-up page'
                  className='inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent'
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  Get Started with Zoho <FaArrowRight size={11} aria-hidden='true' />
                </a>
                <TransitionLink
                  href='/solutions/zoho'
                  label='Zoho Solutions'
                  className='inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary'
                  style={{
                    borderColor: 'var(--color-primary)',
                    color: 'var(--color-primary)',
                  }}
                >
                  Learn More
                </TransitionLink>
              </div>
            </div>
          </div>

          {/* RIGHT — Product grid chips */}
          <div
            className='lg:col-span-2'
            data-aos='fade-left'
            data-aos-duration='500'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {ZOHO_PRODUCTS.map((product, i) => (
                <a
                  key={product.slug}
                  href={product.signupUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Get started with ${product.name}, opens Zoho sign-up`}
                  className='group flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-primary/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                  data-aos='fade-up'
                  data-aos-duration='400'
                  data-aos-delay={String(i * 60)}
                >
                  {/* Product logo */}
                  <div
                    className='w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 p-1.5 transition-transform duration-300 group-hover:scale-105'
                    style={{ backgroundColor: 'rgba(45,88,29,0.06)' }}
                  >
                    <Image
                      src={product.logo}
                      alt=''
                      width={32}
                      height={32}
                      className='object-contain w-auto h-auto max-h-full'
                      aria-hidden='true'
                    />
                  </div>

                  {/* Text */}
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-bold text-gray-900 group-hover:text-primary transition-colors'>
                      {product.name}
                    </p>
                    <p className='text-xs text-gray-500 mt-0.5 line-clamp-2 leading-relaxed'>
                      {product.tagline}
                    </p>
                  </div>

                  <FaArrowRight
                    size={11}
                    className='flex-shrink-0 mt-1 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200'
                    aria-hidden='true'
                  />
                </a>
              ))}
            </div>

            <p className='text-xs text-gray-400 mt-5 text-center'>
              Each link opens a Zoho-hosted sign-up page. EasyLink provides implementation and support.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ZohoSection
