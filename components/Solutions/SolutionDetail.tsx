'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { TransitionLink } from '@/components/Transitions/TransitionLink'
import { FaArrowRight, FaTicketAlt, FaCheckCircle } from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import type { Solution } from '@/data/solutions'
import { SOLUTIONS } from '@/data/solutions'

// ── Image Slideshow ──────────────────────────────────────────────────────────
function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className='relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] bg-gray-100 group'>
      {images.map((src, i) => (
        <div key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={src} alt={`${title} — image ${i + 1}`} fill className='object-cover' priority={i === 0} />
        </div>
      ))}

      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none' />

      <button onClick={prev}
        className='absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200'>
        <FaChevronLeft size={13} />
      </button>
      <button onClick={next}
        className='absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200'>
        <FaChevronRight size={13} />
      </button>

      <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6' : 'w-2 bg-white/50'}`}
            style={i === current ? { backgroundColor: 'var(--color-accent)' } : {}} />
        ))}
      </div>
    </div>
  )
}

// ── Main Layout ──────────────────────────────────────────────────────────────
export function SolutionDetail({ solution }: { solution: Solution }) {
  const related = SOLUTIONS.filter((s) => s.slug !== solution.slug).slice(0, 3)

  return (
    <main className='bg-white'>

      {/* HERO */}
      <section className='pt-40 pb-16 border-b border-gray-100'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='flex items-center gap-3 mb-6'>
            <TransitionLink href='/solutions' label='Solutions'
              className='text-sm font-mono text-gray-400 hover:text-gray-700 transition-colors'>
              Solutions
            </TransitionLink>
            <span className='text-gray-300'>/</span>
            <span className='text-sm font-mono' style={{ color: 'var(--color-accent)' }}>
              {solution.title}
            </span>
          </div>
          <div className='max-w-3xl'>
            <p className='text-sm font-mono uppercase tracking-widest mb-4'
              style={{ color: 'var(--color-accent)' }}>
              EasyLink Solutions
            </p>
            <h1 className='text-gray-900 text-4xl md:text-5xl font-bold mb-4 leading-tight'>
              {solution.title}
            </h1>
            <p className='text-xl font-medium mb-4' style={{ color: 'var(--color-primary)' }}>
              {solution.subtitle}
            </p>
            <p className='text-gray-600 text-lg leading-relaxed'>{solution.description}</p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className='py-20'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-16'>

            {/* LEFT */}
            <div className='lg:col-span-3 flex flex-col gap-10'>
              <ImageSlider images={solution.images} title={solution.title} />

              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>Overview</h2>
                <p className='text-gray-600 text-lg leading-relaxed'>{solution.longDescription}</p>
              </div>

              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>What&apos;s included</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                  {solution.features.map((feature, i) => (
                    <div key={i} className='flex flex-col gap-2 p-5 rounded-2xl border border-gray-100 bg-gray-50'>
                      <div className='flex items-center gap-2'>
                        <div className='w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0'
                          style={{ backgroundColor: 'var(--color-primary)' }}>
                          <FaCheckCircle className='text-white' size={12} />
                        </div>
                        <h4 className='text-sm font-bold text-gray-900'>{feature.title}</h4>
                      </div>
                      <p className='text-sm text-gray-600 leading-relaxed pl-9'>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className='lg:col-span-2 flex flex-col gap-8'>

              <div className='rounded-2xl border border-gray-100 p-6 shadow-sm'>
                <h3 className='text-lg font-bold text-gray-900 mb-5'>Key Benefits</h3>
                <ul className='flex flex-col gap-3'>
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <div className='w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'
                        style={{ backgroundColor: 'rgba(232,101,46,0.1)' }}>
                        <div className='w-2 h-2 rounded-full' style={{ backgroundColor: 'var(--color-accent)' }} />
                      </div>
                      <span className='text-sm text-gray-700 leading-relaxed'>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='rounded-2xl border border-gray-100 p-6 shadow-sm'>
                <h3 className='text-lg font-bold text-gray-900 mb-5'>Technologies & Services</h3>
                <div className='flex flex-wrap gap-2'>
                  {solution.techStack.map((tech) => (
                    <span key={tech}
                      className='text-xs font-mono px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='rounded-2xl p-6 bg-black text-white'>
                <h3 className='text-lg font-bold mb-3'>Ready to get started?</h3>
                <p className='text-white/70 text-sm mb-5 leading-relaxed'>
                  Talk to our team about how {solution.title} can work for your business.
                </p>
                <div className='flex flex-col gap-3'>
                  <TransitionLink href='/contact' label='Contact'
                    className='inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all hover:opacity-90'
                    style={{ backgroundColor: 'var(--color-accent)' }}>
                    Work with Us <FaArrowRight size={11} />
                  </TransitionLink>
                  <a href='https://easylinktechnologies.freshdesk.com/support/home'
                    target='_blank' rel='noopener noreferrer'
                    className='inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10'>
                    <FaTicketAlt size={11} /> Raise a Ticket
                  </a>
                </div>
              </div>

              <div className='rounded-2xl border border-gray-100 p-6'>
                <p className='text-xs font-mono uppercase tracking-wider text-gray-400 mb-4'>Contact Support</p>
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Helpdesk</span>
                    <span className='font-semibold' style={{ color: 'var(--color-primary)' }}>24/7</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Phone</span>
                    <a href='tel:+254202597788' className='font-semibold text-gray-900 hover:underline'>020 259 77 88</a>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Email</span>
                    <a href='mailto:info@easylink.co.ke' className='font-semibold text-gray-900 hover:underline'>info@easylink.co.ke</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className='py-20 border-t border-gray-100'>
        <div className='container mx-auto max-w-7xl px-4'>
          <h2 className='text-2xl font-bold text-gray-900 mb-10'>Other Solutions</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {related.map((s) => (
              <TransitionLink key={s.slug} href={s.link} label={s.title}
                className='group flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300'>
                <div className='relative h-36 rounded-xl overflow-hidden bg-gray-50'>
                  <Image src={s.coverImage} alt={s.title} fill className='object-cover' />
                </div>
                <h3 className='text-base font-bold text-gray-900'>{s.title}</h3>
                <p className='text-sm text-gray-500 line-clamp-2'>{s.description}</p>
                <span className='text-sm font-semibold flex items-center gap-1 mt-auto'
                  style={{ color: 'var(--color-accent)' }}>
                  Read More <FaArrowRight size={10} />
                </span>
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
