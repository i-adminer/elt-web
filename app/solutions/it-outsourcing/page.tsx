import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Outsourcing | EasyLink Technologies',
  description: 'A complete IT department delivered as a service — staff augmentation, projects, and full management.',
}

export default function Page() {
  const solution = getSolutionBySlug('it-outsourcing')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
