import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Virtual CIO Services | EasyLink Technologies',
  description: 'Strategic IT leadership without the full-time cost. Align technology with your business goals.',
}

export default function Page() {
  const solution = getSolutionBySlug('virtual-cio')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
