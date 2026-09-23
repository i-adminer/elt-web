import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Protection & Backup',
  description:
    'EasyLink Data Protection — automated backups, disaster recovery, ransomware protection, and data encryption for East African businesses. Never lose critical data again.',
  keywords: [
    'data protection Kenya',
    'backup solutions Nairobi',
    'disaster recovery Kenya',
    'ransomware protection Kenya',
    'data backup East Africa',
    'business continuity Kenya',
    'data encryption Kenya',
    'DRaaS Kenya',
  ],
  alternates: { canonical: 'https://www.easylink.co.ke/solutions/data-protection' },
  openGraph: {
    title: 'Data Protection & Backup | EasyLink Technologies',
    description:
      'Automated backups, disaster recovery, and ransomware protection for East African businesses. Recover from data loss in hours, not days.',
    url: 'https://www.easylink.co.ke/solutions/data-protection',
    images: [{ url: '/images/solutions/data-protection-1.jpg', width: 1200, height: 800 }],
  },
}

export default function Page() {
  const solution = getSolutionBySlug('data-protection')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
