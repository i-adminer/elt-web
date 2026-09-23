import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Solutions',
  description:
    'EasyLink Cloud Solutions — cloud strategy, migration, and management for AWS, Azure, and Google Cloud. Secure, scalable infrastructure for East African businesses.',
  keywords: [
    'cloud solutions Kenya',
    'cloud migration Nairobi',
    'AWS Kenya',
    'Microsoft Azure Kenya',
    'Google Cloud Kenya',
    'cloud hosting East Africa',
    'cloud infrastructure Kenya',
    'cloud security Kenya',
  ],
  alternates: { canonical: 'https://www.easylink.co.ke/solutions/cloud-solutions' },
  openGraph: {
    title: 'Cloud Solutions | EasyLink Technologies',
    description:
      'Cloud strategy, migration, and management for AWS, Azure, and Google Cloud. Enterprise-grade cloud infrastructure for East African businesses.',
    url: 'https://www.easylink.co.ke/solutions/cloud-solutions',
    images: [{ url: '/images/solutions/cloud-1.jpg', width: 1200, height: 800 }],
  },
}

export default function Page() {
  const solution = getSolutionBySlug('cloud-solutions')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
