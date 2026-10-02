'use client'

import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTicketAlt,
} from 'react-icons/fa'
import { FaArrowRight, FaXTwitter } from 'react-icons/fa6'
import { sendContactEmail } from '@/app/actions/contact'

// ── Form fields type ─────────────────────────────────────────────────────────
interface Fields {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

// ── The actual form — reads search params for pre-fill ───────────────────────
function ContactForm() {
  const searchParams = useSearchParams()
  const formRef = useRef<HTMLFormElement>(null)

  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  // Pre-fill name + email if coming from the homepage Joinus strip
  useEffect(() => {
    const name = searchParams.get('name') ?? ''
    const email = searchParams.get('email') ?? ''
    if (name || email) {
      setFields((f) => ({ ...f, name, email }))
    }
  }, [searchParams])

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const toastId = toast.loading('Sending your message...', {
      position: 'top-center',
    })

    const result = await sendContactEmail(fields)

    toast.dismiss(toastId)

    if (result.success) {
      toast.success('Message sent! We will be in touch shortly.', {
        position: 'top-center',
        duration: 5000,
        style: {
          background: '#2d581d',
          color: '#fff',
          fontWeight: 600,
          borderRadius: '12px',
          padding: '14px 20px',
        },
        iconTheme: { primary: '#fff', secondary: '#2d581d' },
      })
      setFields({ name: '', email: '', phone: '', subject: '', message: '' })
      formRef.current?.reset()
    } else {
      toast.error(result.error ?? 'Something went wrong. Please try again.', {
        position: 'top-center',
        duration: 6000,
        style: {
          background: '#e8652e',
          color: '#fff',
          fontWeight: 600,
          borderRadius: '12px',
          padding: '14px 20px',
        },
        iconTheme: { primary: '#fff', secondary: '#e8652e' },
      })
    }

    setLoading(false)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all'

  return (
    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-5' noValidate>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-sm font-medium text-gray-700'>
            Your Name <span style={{ color: 'var(--color-accent)' }}>*</span>
          </label>
          <input
            type='text'
            id='name'
            required
            value={fields.name}
            onChange={set('name')}
            placeholder='e.g. Jane Kamau'
            className={inputClass}
            autoComplete='name'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='phone' className='text-sm font-medium text-gray-700'>
            Phone Number
          </label>
          <input
            type='tel'
            id='phone'
            value={fields.phone}
            onChange={set('phone')}
            placeholder='+254 7XX XXX XXX'
            className={inputClass}
            autoComplete='tel'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className='text-sm font-medium text-gray-700'>
          Email Address <span style={{ color: 'var(--color-accent)' }}>*</span>
        </label>
        <input
          type='email'
          id='email'
          required
          value={fields.email}
          onChange={set('email')}
          placeholder='you@company.com'
          className={inputClass}
          autoComplete='email'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='subject' className='text-sm font-medium text-gray-700'>
          Subject <span style={{ color: 'var(--color-accent)' }}>*</span>
        </label>
        <input
          type='text'
          id='subject'
          required
          value={fields.subject}
          onChange={set('subject')}
          placeholder='How can we help?'
          className={inputClass}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='message' className='text-sm font-medium text-gray-700'>
          Message <span style={{ color: 'var(--color-accent)' }}>*</span>
        </label>
        <textarea
          id='message'
          required
          rows={6}
          value={fields.message}
          onChange={set('message')}
          placeholder='Tell us about your business and what you need help with...'
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type='submit'
        disabled={loading}
        className='inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed mt-2'
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        {loading ? (
          <>
            <svg className='animate-spin w-4 h-4' fill='none' viewBox='0 0 24 24' aria-hidden='true'>
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message <FaArrowRight size={13} aria-hidden='true' />
          </>
        )}
      </button>
    </form>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <main className='bg-white'>
      {/* Toast container — top center, themed */}
      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            fontFamily: 'Manrope, sans-serif',
            fontSize: '14px',
          },
        }}
      />

      {/* HERO */}
      <section className='pt-40 pb-20 bg-gray-50 border-b border-gray-100'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='max-w-2xl'>
            <p
              className='text-sm font-mono uppercase tracking-widest mb-4'
              style={{ color: 'var(--color-accent)' }}
            >
              Contact Us
            </p>
            <h1 className='text-gray-900 text-4xl md:text-5xl font-bold mb-6 leading-tight'>
              Let&apos;s talk about your IT needs
            </h1>
            <p className='text-gray-600 text-lg leading-relaxed'>
              Whether you need help with a technical issue, want to explore our services,
              or are ready to get started — our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN SPLIT */}
      <section className='py-20'>
        <div className='container mx-auto max-w-7xl px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-16'>

            {/* LEFT — contact info */}
            <div className='lg:col-span-2 flex flex-col gap-10'>
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-8'>Get in touch</h2>
                <div className='flex flex-col gap-6'>

                  <div className='flex items-start gap-4'>
                    <div
                      className='w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0'
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      <FaPhone className='text-white' size={15} />
                    </div>
                    <div>
                      <p className='text-xs font-mono uppercase tracking-wider text-gray-400 mb-1'>Phone</p>
                      <a href='tel:+254202597788' className='font-medium hover:underline block' style={{ color: 'var(--color-primary)' }}>
                        020 259 77 88
                      </a>
                      <a href='tel:+254202597744' className='font-medium hover:underline block' style={{ color: 'var(--color-primary)' }}>
                        020 259 77 44
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div
                      className='w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0'
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      <FaEnvelope className='text-white' size={15} />
                    </div>
                    <div>
                      <p className='text-xs font-mono uppercase tracking-wider text-gray-400 mb-1'>Email</p>
                      <a href='mailto:info@easylink.co.ke' className='font-medium hover:underline' style={{ color: 'var(--color-primary)' }}>
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
                      <a
                        href='https://x.com/Easylinktech?s=20'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='font-medium hover:underline'
                        style={{ color: 'var(--color-primary)' }}
                      >
                        @Easylinktech
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Helpdesk card — ticket button hidden per global hide */}
              <div className='rounded-2xl p-6 bg-white shadow-lg border border-gray-100'>
                <div className='flex items-center gap-3 mb-3'>
                  <FaTicketAlt size={18} style={{ color: 'var(--color-accent)' }} />
                  <p className='font-semibold text-base text-gray-900'>Need immediate help?</p>
                </div>
                <p className='text-gray-500 text-sm leading-relaxed'>
                  For urgent technical issues, call us directly on 020 259 77 88 or send us a message using the form.
                </p>
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

            {/* RIGHT — form */}
            <div className='lg:col-span-3'>
              <div className='bg-primary/10 rounded-3xl p-8 md:p-12 border border-gray-100'>
                <div className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-2'>Send us a message</h2>
                  <p className='text-gray-500 text-sm'>
                    We typically respond within a few hours during business hours.
                  </p>
                </div>
                {/* Suspense required because useSearchParams reads the URL */}
                <Suspense fallback={<div className='h-96 animate-pulse bg-gray-100 rounded-2xl' />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
