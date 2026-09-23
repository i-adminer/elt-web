'use client'

import Image from 'next/image'
import { SOLUTIONS } from '@/data/solutions'
import { TransitionLink } from '@/components/Transitions/TransitionLink'
import { FaArrowRight } from 'react-icons/fa6'

export default function SolutionsPage() {
  return (
    <main className='bg-white'>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className='pt-40 pb-20 border-b border-gray-100'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='max-w-3xl'>
            <p className='text-sm font-mono uppercase tracking-widest mb-4'
              style={{ color: 'var(--color-accent)' }}>
              Our Solutions
            </p>
            <h1 className='text-gray-900 text-4xl md:text-5xl font-bold mb-6 leading-tight'>
              ICT Services built around your business
            </h1>
            <p className='text-gray-600 text-lg leading-relaxed'>
              From 24/7 managed IT support to strategic cloud migration — every service we offer
              is designed to make technology work harder for your business, at a cost that makes sense.
            </p>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ───────────────────────────────────────────────── */}
      <section className='py-20'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {SOLUTIONS.map((solution, index) => (
              <article key={solution.slug}
                className='group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden'>

                {/* Image */}
                <div className='relative h-52 overflow-hidden bg-gray-50'>
                  <Image
                    src={solution.coverImage}
                    alt={solution.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                    priority={index < 3}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
                  {/* Index badge */}
                  <div className='absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold text-white'
                    style={{ backgroundColor: 'var(--color-primary)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className='flex flex-col flex-1 p-6 gap-4'>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-bold text-gray-900 group-hover:text-primary transition-colors'
                      style={{ color: 'inherit' }}>
                      {solution.title}
                    </h3>
                    <p className='text-sm font-medium' style={{ color: 'var(--color-accent)' }}>
                      {solution.subtitle}
                    </p>
                  </div>

                  <p className='text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1'>
                    {solution.description}
                  </p>

                  {/* Read More */}
                  <TransitionLink href={solution.link} label={solution.title}
                    className='inline-flex items-center gap-2 text-sm font-semibold mt-2 transition-all group/link'
                    style={{ color: 'var(--color-primary)' }}>
                    <span className='group-hover/link:underline'>Read More</span>
                    <FaArrowRight size={12}
                      className='transition-transform duration-200 group-hover/link:translate-x-1' />
                  </TransitionLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className='py-20 bg-gray-50 border-t border-gray-100'>
        <div className='container mx-auto max-w-4xl px-4 text-center'>
          <h2 className='text-gray-900 text-3xl md:text-4xl font-bold mb-4'>
            Not sure which solution fits?
          </h2>
          <p className='text-gray-600 text-lg mb-8 max-w-xl mx-auto'>
            Talk to our team and we will recommend the right combination of services for your business size and industry.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <TransitionLink href='/contact' label='Contact'
              className='inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90'
              style={{ backgroundColor: 'var(--color-accent)' }}>
              Talk to Us <FaArrowRight size={13} />
            </TransitionLink>
            <a href='https://easylinktechnologies.freshdesk.com/support/home'
              target='_blank' rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-base font-semibold transition-all hover:text-white'
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
              Raise a Ticket
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
