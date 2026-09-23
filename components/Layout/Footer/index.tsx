'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { footerlinks } from '@/types/footerlinks'
import { TransitionLink } from '@/components/Transitions/TransitionLink'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const footer = () => {
  const [footerlinks, setFooterLinks] = useState<footerlinks[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLinks(data.FooterLinksData)
      } catch (error) {
        console.error('Error fetching footer data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='bg-black text-white' id='first-section'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-48 lg:pt-52 xl:pt-56 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12'>
          {/* COMPANY INFO - Takes 2 columns on large screens */}
          <div className='lg:col-span-2'>
            <TransitionLink href='/' label='Home' className='block mb-6'>
              <Image
                src='/logo/logo.png'
                alt='EasyLink Technologies'
                width={180}
                height={60}
                className='h-auto w-auto max-h-14 brightness-0 invert'
              />
            </TransitionLink>
            <p className='text-white/70 text-base mb-6 leading-relaxed'>
              Reliable ICT Support Services for Your Business Growth. 
              Providing 24/7 IT support across East Africa.
            </p>
            
            {/* Contact Info */}
            <div className='space-y-3 mb-6'>
              <div className='flex items-start gap-3'>
                <svg className='w-5 h-5 mt-0.5 text-accent flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
                <div className='text-white/70'>
                  <p>West Park Suites</p>
                  <p>Ojijo Close</p>
                  <p>Westlands 00200</p>
                  <p>Kenya</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <svg className='w-5 h-5 mt-0.5 text-accent flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
                <div className='text-white/70'>
                  <a href='tel:+254202597788' className='hover:text-accent transition-colors block'>
                    020 259 77 88
                  </a>
                  <a href='tel:+254202597744' className='hover:text-accent transition-colors block'>
                    020 259 77 44
                  </a>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <svg className='w-5 h-5 mt-0.5 text-accent flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
                <a href='mailto:info@easylink.co.ke' className='text-white/70 hover:text-accent transition-colors'>
                  info@easylink.co.ke
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className='flex items-center gap-4'>
              <Link 
                href='https://www.linkedin.com/company/easylinktechnologies/' 
                target='_blank' 
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors group'>
                <FaLinkedin className='text-white text-xl group-hover:scale-110 transition-transform' />
              </Link>
              <Link 
                href='https://x.com/Easylinktech?s=20' 
                target='_blank' 
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors group'>
                <FaXTwitter className='text-white text-xl group-hover:scale-110 transition-transform' />
              </Link>
              <Link 
                href='https://wa.me/254202597788' 
                target='_blank' 
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors group'>
                <FaWhatsapp className='text-white text-xl group-hover:scale-110 transition-transform' />
              </Link>
            </div>
          </div>

          {/* FOOTER LINKS - Each takes 1 column */}
          {footerlinks.map((item, i) => (
            <div key={i} className='lg:col-span-1'>
              <h3 className='text-white text-lg font-bold mb-6'>
                {item.section}
              </h3>
              <ul className='space-y-3'>
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    {link.href && link.href.startsWith('http') ? (
                      <Link
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white/70 text-base hover:text-accent hover:translate-x-1 inline-block transition-all'>
                        {link.label}
                      </Link>
                    ) : (
                      <TransitionLink
                        href={link.href || '/'}
                        label={link.label || ''}
                        className='text-white/70 text-base hover:text-accent hover:translate-x-1 inline-block transition-all'>
                        {link.label}
                      </TransitionLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FOOTER BOTTOM */}
        <div className='mt-12 pt-8 border-t border-white/10'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-white/60 text-sm text-center md:text-left'>
              © 2026 EasyLink Technologies. All Rights Reserved.
            </p>
            <div className='flex items-center gap-6'>
              <TransitionLink href='/privacy' label='Privacy'>
                <span className='text-white/60 text-sm hover:text-accent transition-colors'>
                  Privacy Policy
                </span>
              </TransitionLink>
              <span className='text-white/30'>|</span>
              <TransitionLink href='/terms' label='Terms'>
                <span className='text-white/60 text-sm hover:text-accent transition-colors'>
                  Terms & Conditions
                </span>
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
