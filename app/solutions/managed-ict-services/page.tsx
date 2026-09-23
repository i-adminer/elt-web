import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managed ICT Services',
  description:
    'EasyLink Managed ICT Services — 24/7 IT monitoring, proactive maintenance, cybersecurity, and network management for SMBs across East Africa. Fixed monthly pricing.',
  keywords: [
    'managed ICT services Kenya',
    'managed IT services Nairobi',
    '24/7 IT support Kenya',
    'proactive IT monitoring Kenya',
    'network management Nairobi',
    'cybersecurity Kenya SMB',
  ],
  alternates: { canonical: 'https://www.easylink.co.ke/solutions/managed-ict-services' },
  openGraph: {
    title: 'Managed ICT Services | EasyLink Technologies',
    description:
      '24/7 IT monitoring, maintenance, and cybersecurity management for East African businesses. Fixed predictable monthly pricing.',
    url: 'https://www.easylink.co.ke/solutions/managed-ict-services',
    images: [{ url: '/images/solutions/managed-ict-1.jpg', width: 1200, height: 800 }],
  },
}

export default function Page() {
  const solution = getSolutionBySlug('managed-ict-services')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
