import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '24/7 Helpdesk Support',
  description:
    'EasyLink 24/7 Helpdesk Support — immediate technical assistance via phone, email, and remote access. Powered by Freshdesk with full ticket tracking for East African businesses.',
  keywords: [
    'IT helpdesk Kenya',
    '24/7 tech support Nairobi',
    'remote IT support Kenya',
    'Freshdesk support Kenya',
    'IT ticket system Kenya',
    'technical support East Africa',
    'helpdesk outsourcing Kenya',
  ],
  alternates: { canonical: 'https://www.easylink.co.ke/solutions/helpdesk-support' },
  openGraph: {
    title: '24/7 Helpdesk Support | EasyLink Technologies',
    description:
      'Round-the-clock IT support via phone, email, and remote access. Freshdesk-powered ticket tracking for complete visibility.',
    url: 'https://www.easylink.co.ke/solutions/helpdesk-support',
    images: [{ url: '/images/solutions/helpdesk-1.jpg', width: 1200, height: 800 }],
  },
}

export default function Page() {
  const solution = getSolutionBySlug('helpdesk-support')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
