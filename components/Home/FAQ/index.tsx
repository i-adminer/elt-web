'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { TransitionLink } from '@/components/Transitions/TransitionLink'

const faqs = [
  {
    question: 'What is Managed ICT Services and how does it benefit my business?',
    answer:
      'Managed ICT Services means we take full responsibility for your IT infrastructure — 24/7 monitoring, maintenance, security updates, and helpdesk support — for a fixed monthly fee. Instead of hiring in-house IT staff, you get a dedicated team of experts at a predictable cost, allowing you to focus entirely on running your business.',
  },
  {
    question: 'How quickly can your helpdesk respond to issues?',
    answer:
      'Our helpdesk operates 24/7 and provides multiple support channels including phone (+254 202 259 77 88 / 44), email, Freshdesk tickets, and Twitter (@easylinktech). For critical issues, we aim to respond immediately. All tickets are tracked and managed through our Freshdesk system so you always have visibility on the status of your request.',
  },
  {
    question: 'Do you serve businesses outside Nairobi?',
    answer:
      'Yes. EasyLink Technologies provides ICT support services across East Africa. Many of our services — including helpdesk support, virtual CIO, cloud solutions, and remote monitoring — are delivered entirely online, meaning your location within the region is not a barrier to receiving enterprise-grade IT support.',
  },
  {
    question: 'What size of business do you typically work with?',
    answer:
      'We specialise in supporting small and medium businesses with 10 to 70 employees across a range of industries including Financial Services, Legal Practices, Hospitality, Engineering & Construction, and Accounting. Our services are tailored to give SMBs access to the same quality of IT support that larger enterprises enjoy.',
  },
  {
    question: 'How is pricing structured for your services?',
    answer:
      'We operate on a fixed predictable monthly spend model — no surprise bills or hidden costs. Your package is scoped based on the number of users, devices, and services required. This makes budgeting straightforward and ensures you always know exactly what you are getting. Contact us for a customised quote tailored to your business needs.',
  },
]

const FAQ = () => {
  return (
    <section
      id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
          <p className='text-lg font-normal text-white text-center mb-6'>FAQ</p>
          <h2 className='text-white text-center max-w-3xl mx-auto'>
            Frequently asked questions.
          </h2>

          <div className='w-full px-4 pt-16'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <DisclosureButton className='flex w-full justify-between items-center text-left text-xl md:text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                        <span className='text-black pr-4'>{faq.question}</span>
                        <div
                          className={`h-5 w-5 flex-shrink-0 transform transition-transform duration-300 ${
                            open ? 'rotate-180' : ''
                          }`}>
                          <Icon
                            icon='lucide:chevron-up'
                            width='20'
                            height='20'
                          />
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className='text-base text-black/60 font-normal text-left pt-4 mt-6 border-t border-border leading-relaxed'>
                        {faq.answer}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className='flex flex-col items-center gap-4 mt-8 px-4'>
            <p className='text-white/80 text-lg text-center'>
              Still have more questions?
            </p>
            <TransitionLink
              href='/contact'
              label='Contact Us'
              className='inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold transition-all hover:bg-accent hover:text-white'
              style={{ color: 'var(--color-primary)' }}
            >
              Contact Us
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
