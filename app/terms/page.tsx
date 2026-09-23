import React from 'react'

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto max-w-4xl px-4 py-16 md:py-24'>
        <h1 className='text-4xl md:text-5xl font-bold text-primary mb-8'>
          Terms & Conditions
        </h1>
        
        <div className='prose prose-lg max-w-none'>
          <p className='text-gray-600 mb-8'>
            Last Updated: January 2026
          </p>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              1. Agreement to Terms
            </h2>
            <p className='text-gray-700'>
              By accessing or using EasyLink Technologies' services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              2. Services
            </h2>
            <p className='text-gray-700 mb-4'>
              EasyLink Technologies provides ICT support services including but not limited to:
            </p>
            <ul className='list-disc pl-6 text-gray-700 space-y-2'>
              <li>Managed ICT Services</li>
              <li>Virtual CIO Services</li>
              <li>24/7 Helpdesk Support</li>
              <li>Cloud Solutions</li>
              <li>Data Protection and Backup</li>
              <li>IT Outsourcing</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              3. Service Level Agreement (SLA)
            </h2>
            <p className='text-gray-700'>
              Our service commitments, response times, and uptime guarantees are defined in individual Service Level Agreements provided to clients upon service activation. We strive to maintain 99.9% uptime for critical services and provide 24/7 support for urgent issues.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              4. Client Responsibilities
            </h2>
            <p className='text-gray-700 mb-4'>
              Clients are responsible for:
            </p>
            <ul className='list-disc pl-6 text-gray-700 space-y-2'>
              <li>Providing accurate information for service delivery</li>
              <li>Maintaining confidentiality of account credentials</li>
              <li>Complying with applicable laws and regulations</li>
              <li>Timely payment of fees as per the agreed schedule</li>
              <li>Providing necessary access to systems and facilities</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              5. Payment Terms
            </h2>
            <p className='text-gray-700'>
              Payment terms are specified in individual service agreements. Generally, invoices are issued monthly or as agreed, and payment is due within 30 days. Late payments may incur additional charges and may result in service suspension.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              6. Confidentiality
            </h2>
            <p className='text-gray-700'>
              We maintain strict confidentiality of all client information and data. Our team members sign non-disclosure agreements, and we implement appropriate security measures to protect sensitive information.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              7. Limitation of Liability
            </h2>
            <p className='text-gray-700'>
              While we strive for excellence, EasyLink Technologies shall not be liable for indirect, incidental, or consequential damages arising from service use. Our total liability is limited to the fees paid for the specific service in question during the three months prior to the incident.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              8. Termination
            </h2>
            <p className='text-gray-700'>
              Either party may terminate services with 30 days written notice. We reserve the right to terminate services immediately for non-payment or breach of terms. Upon termination, clients remain responsible for all outstanding fees.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              9. Modifications
            </h2>
            <p className='text-gray-700'>
              We reserve the right to modify these terms at any time. Significant changes will be communicated to clients via email. Continued use of services after modifications constitutes acceptance of updated terms.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              10. Governing Law
            </h2>
            <p className='text-gray-700'>
              These terms are governed by the laws of Kenya. Any disputes shall be resolved through arbitration in Nairobi, Kenya.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              11. Contact Information
            </h2>
            <p className='text-gray-700'>
              For questions about these Terms & Conditions, please contact:
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
