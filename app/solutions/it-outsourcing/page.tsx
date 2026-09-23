import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Outsourcing',
  description:
    'EasyLink IT Outsourcing — complete IT department as a service including staff augmentation, project management, and technical consulting for East African businesses.',
  keywords: [
    'IT outsourcing Kenya',
    'IT staff augmentation Nairobi',
    'outsourced IT department Kenya',
    'IT project management Kenya',
    'technical consulting East Africa',
    'IT consulting Nairobi',
    'managed IT staff Kenya',
  ],
  alternates: { canonical: 'https://www.easylink.co.ke/solutions/it-outsourcing' },
  openGraph: {
    title: 'IT Outsourcing | EasyLink Technologies',
    description:
      'A complete IT department delivered as a service — staff augmentation, project delivery, and full IT management for East African businesses.',
    url: 'https://www.easylink.co.ke/solutions/it-outsourcing',
    images: [{ url: '/images/solutions/it-outsourcing-1.jpg', width: 1200, height: 800 }],
  },
}

export default function Page() {
  const solution = getSolutionBySlug('it-outsourcing')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
