import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Virtual CIO Services',
  description:
    'EasyLink Virtual CIO — strategic IT leadership, technology roadmaps, vendor management, and digital transformation guidance without the cost of a full-time executive.',
  keywords: [
    'virtual CIO Kenya',
    'vCIO services Nairobi',
    'IT strategy East Africa',
    'technology leadership Kenya',
    'digital transformation Kenya',
    'IT roadmap planning Kenya',
    'fractional CIO Kenya',
  ],
  alternates: { canonical: 'https://www.easylink.co.ke/solutions/virtual-cio' },
  openGraph: {
    title: 'Virtual CIO Services | EasyLink Technologies',
    description:
      'Strategic IT leadership for East African businesses — technology roadmaps, vendor management, and digital transformation without hiring a full-time CIO.',
    url: 'https://www.easylink.co.ke/solutions/virtual-cio',
    images: [{ url: '/images/solutions/virtual-cio-1.jpg', width: 1200, height: 800 }],
  },
}

export default function Page() {
  const solution = getSolutionBySlug('virtual-cio')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
