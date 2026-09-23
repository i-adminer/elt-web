import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managed ICT Services | EasyLink Technologies',
  description: 'Complete IT infrastructure management and 24/7 support for East African businesses.',
}

export default function Page() {
  const solution = getSolutionBySlug('managed-ict-services')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
