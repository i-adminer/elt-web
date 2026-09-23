import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Protection & Backup | EasyLink Technologies',
  description: 'Enterprise-grade data security, backup, and disaster recovery for business continuity.',
}

export default function Page() {
  const solution = getSolutionBySlug('data-protection')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
