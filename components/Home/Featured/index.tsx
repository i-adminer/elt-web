'use client'

import { SolutionDeck } from '@/components/Solutions/SolutionDeck'
import { SOLUTIONS } from '@/data/solutions'
import { TransitionLink } from '@/components/Transitions/TransitionLink'
import { FaArrowRight } from 'react-icons/fa'

const Featured = () => {
  return (
    <section className='w-full bg-gray-50'>
      {/* Section Header */}
      <div className='container mx-auto max-w-7xl px-4 pt-16 pb-8'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
          <div>
            <p
              className='text-sm font-mono uppercase tracking-widest mb-3'
              style={{ color: 'var(--color-accent)' }}
            >
              Our Solutions
            </p>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 max-w-xl'>
              ICT Services built for your business
            </h2>
            <p className='mt-4 text-lg text-gray-600 max-w-2xl'>
              From managed IT to cloud solutions — comprehensive ICT support
              tailored to help East African businesses grow and thrive.
            </p>
          </div>
          <TransitionLink
            href='/solutions'
            label='Solutions'
            className='inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-mono uppercase tracking-widest transition-all hover:text-white shrink-0'
            style={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)',
            }}
          >
            All Solutions
            <FaArrowRight size={12} />
          </TransitionLink>
        </div>
      </div>

      {/* Scroll-Lock Stacking Cards */}
      <div className='container mx-auto max-w-7xl px-4 pb-16'>
        <SolutionDeck solutions={SOLUTIONS} />
      </div>
    </section>
  )
}

export default Featured
