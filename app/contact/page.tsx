'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa'
import { FaArrowRight, FaXTwitter } from 'react-icons/fa6'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — wire up to real backend later
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <main className='bg-white'>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className='pt-40 pb-20 bg-gray-50 border-b border-gray-100'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='max-w-2xl'>
            <p className='text-sm font-mono uppercase tracking-widest mb-4'
              style={{ color: 'var(--color-accent)' }}>
              Contact Us
            </p>
            <h1 className='text-gray-900 text-4xl md:text-5xl font-bold mb-6 leading-tight'>
              Let&apos;s talk about your IT needs
            </h1>
            <p className='text-gray-600 text-lg leading-relaxed'>
              Whether you need a hand with a technical issue, want to explore our services,
              or are ready to get started — our team is here and ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN SPLIT LAYOUT ──────────────────────────────────────────────── */}
      <section className='py-20'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-16'>

            {/* LEFT — Contact info */}
            <div className='lg:col-span-2 flex flex-col gap-10'>

              {/* Contact details */}
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-8'>
                  Get in touch
                </h2>
                <div className='flex flex-col gap-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0'
                      style={{ backgroundColor: 'var(--color-primary)' }}>
                      <FaPhone className='text-white' size={15} />
                    </div>
                    <div>
                      <p className='text-xs font-mono uppercase tracking-wider text-gray-400 mb-1'>Phone</p>
                      <a href='tel:+254202597788'
                        className='text-gray-900 font-medium hover:underline block'
                        style={{ color: 'var(--color-primary)' }}>
                        020 259 77 88
                      </a>
                      <a href='tel:+254202597744'
                        className='text-gray-900 font-medium hover:underline block'
                        style={{ color: 'var(--color-primary)' }}>
                        020 259 77 44
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0'
                      style={{ backgroundColor: 'var(--color-accent)' }}>
                      <FaEnvelope className='text-white' size={15} />
                    </div>
                    <div>
                      <p className='text-xs font-mono uppercase tracking-wider text-gray-400 mb-1'>Email</p>
                      <a href='mailto:info@easylink.co.ke'
                        className='font-medium hover:underline'
                        style={{ color: 'var(--color-primary)' }}>
                        info@easylink.co.ke
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-900'>
                      <FaMapMarkerAlt className='text-white' size={15} />
                    </div>
                    <div>
                      <p className='text-xs font-mono uppercase tracking-wider text-gray-400 mb-1'>Office</p>
                      <p className='text-gray-700 font-medium leading-relaxed'>
                        West Park Suites, Ojijo Close<br />
                        Westlands 00200, Nairobi<br />
                        Kenya
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-900'>
                      <FaXTwitter className='text-white' size={15} />
                    </div>
                    <div>
                      <p className='text-xs font-mono uppercase tracking-wider text-gray-400 mb-1'>Twitter / X</p>
                      <a href='https://x.com/Easylinktech?s=20' target='_blank' rel='noopener noreferrer'
                        className='font-medium hover:underline'
                        style={{ color: 'var(--color-primary)' }}>
                        @Easylinktech
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Helpdesk CTA card */}
              <div className='rounded-2xl p-6 bg-white shadow-lg border border-gray-100'>
                <div className='flex items-center gap-3 mb-3'>
                  <FaTicketAlt size={18} style={{ color: 'var(--color-accent)' }} />
                  <p className='font-semibold text-base text-gray-900'>Need immediate help?</p>
                </div>
                <p className='text-gray-500 text-sm mb-5 leading-relaxed'>
                  For technical issues, our Freshdesk helpdesk is the fastest way to get a response from our support team.
                </p>
                <a href='https://easylinktechnologies.freshdesk.com/support/home'
                  target='_blank' rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all hover:opacity-90'
                  style={{ backgroundColor: 'var(--color-accent)' }}>
                  Raise a Ticket <FaArrowRight size={11} />
                </a>
              </div>

              {/* Hours */}
              <div className='rounded-2xl border border-gray-100 p-6'>
                <p className='text-xs font-mono uppercase tracking-wider text-gray-400 mb-4'>Support Hours</p>
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between'>
                    <span className='text-gray-700 text-sm'>Helpdesk Support</span>
                    <span className='text-sm font-semibold' style={{ color: 'var(--color-primary)' }}>24/7</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-700 text-sm'>Phone Support</span>
                    <span className='text-sm font-semibold text-gray-900'>Mon – Fri, 8am – 6pm</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-700 text-sm'>Emergency Line</span>
                    <span className='text-sm font-semibold' style={{ color: 'var(--color-accent)' }}>Always On</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className='lg:col-span-3'>
              <div className='bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100'>
                {submitted ? (
                  <div className='flex flex-col items-center justify-center text-center py-16 gap-6'>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center'
                      style={{ backgroundColor: 'var(--color-primary)' }}>
                      <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
                      </svg>
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold text-gray-900 mb-2'>Message received!</h3>
                      <p className='text-gray-600'>
                        Thank you for reaching out. A member of our team will be in touch with you shortly.
                      </p>
                    </div>
                    <button onClick={() => setSubmitted(false)}
                      className='text-sm font-medium hover:underline'
                      style={{ color: 'var(--color-primary)' }}>
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className='mb-8'>
                      <h2 className='text-2xl font-bold text-gray-900 mb-2'>Send us a message</h2>
                      <p className='text-gray-500 text-sm'>We typically respond within a few hours during business hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div className='flex flex-col gap-2'>
                          <label htmlFor='name' className='text-sm font-medium text-gray-700'>
                            Your Name <span style={{ color: 'var(--color-accent)' }}>*</span>
                          </label>
                          <input type='text' id='name' required
                            placeholder='e.g. Jane Kamau'
                            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all'
                            style={{ focusRingColor: 'var(--color-primary)' } as React.CSSProperties}
                          />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <label htmlFor='phone' className='text-sm font-medium text-gray-700'>
                            Phone Number
                          </label>
                          <input type='tel' id='phone'
                            placeholder='+254 7XX XXX XXX'
                            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all'
                          />
                        </div>
                      </div>

                      <div className='flex flex-col gap-2'>
                        <label htmlFor='email' className='text-sm font-medium text-gray-700'>
                          Email Address <span style={{ color: 'var(--color-accent)' }}>*</span>
                        </label>
                        <input type='email' id='email' required
                          placeholder='you@company.com'
                          className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all'
                        />
                      </div>

                      <div className='flex flex-col gap-2'>
                        <label htmlFor='subject' className='text-sm font-medium text-gray-700'>
                          Subject <span style={{ color: 'var(--color-accent)' }}>*</span>
                        </label>
                        <input type='text' id='subject' required
                          placeholder='How can we help?'
                          className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all'
                        />
                      </div>

                      <div className='flex flex-col gap-2'>
                        <label htmlFor='message' className='text-sm font-medium text-gray-700'>
                          Message <span style={{ color: 'var(--color-accent)' }}>*</span>
                        </label>
                        <textarea id='message' required rows={6}
                          placeholder='Tell us about your business and what you need help with...'
                          className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all resize-none'
                        />
                      </div>

                      <button type='submit' disabled={loading}
                        className='inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed mt-2'
                        style={{ backgroundColor: 'var(--color-primary)' }}>
                        {loading ? (
                          <>
                            <svg className='animate-spin w-4 h-4' fill='none' viewBox='0 0 24 24'>
                              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>Send Message <FaArrowRight size={13} /></>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
