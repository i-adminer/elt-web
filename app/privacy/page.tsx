import React from 'react'

export default function PrivacyPage() {
  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto max-w-4xl px-4 py-16 md:py-24'>
        <h1 className='text-4xl md:text-5xl font-bold text-primary mb-8'>
          Privacy Policy
        </h1>
        
        <div className='prose prose-lg max-w-none'>
          <p className='text-gray-600 mb-8'>
            Last Updated: January 2026
          </p>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              1. Information We Collect
            </h2>
            <p className='text-gray-700 mb-4'>
              At EasyLink Technologies, we collect information that you provide directly to us when you:
            </p>
            <ul className='list-disc pl-6 text-gray-700 space-y-2'>
              <li>Request a consultation or service quote</li>
              <li>Sign up for our services</li>
              <li>Contact us through our website or support channels</li>
              <li>Subscribe to our newsletter or communications</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              2. How We Use Your Information
            </h2>
            <p className='text-gray-700 mb-4'>
              We use the information we collect to:
            </p>
            <ul className='list-disc pl-6 text-gray-700 space-y-2'>
              <li>Provide and improve our ICT support services</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send you service updates and technical information</li>
              <li>Comply with legal obligations</li>
              <li>Protect our business and prevent fraud</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              3. Data Security
            </h2>
            <p className='text-gray-700'>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              4. Information Sharing
            </h2>
            <p className='text-gray-700'>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only with trusted partners who assist us in operating our business and servicing you, provided they agree to keep this information confidential.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              5. Your Rights
            </h2>
            <p className='text-gray-700 mb-4'>
              You have the right to:
            </p>
            <ul className='list-disc pl-6 text-gray-700 space-y-2'>
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              6. Contact Us
            </h2>
            <p className='text-gray-700'>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className='mt-4 text-gray-700'>
              <p><strong>EasyLink Technologies</strong></p>
              <p>West Park Suites</p>
              <p>Ojijo Close</p>
              <p>Westlands 00200</p>
              <p>Kenya</p>
              <p className='mt-2'>Phone: 020 259 77 88 / 020 259 77 44</p>
              <p>Email: info@easylink.co.ke</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
