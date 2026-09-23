import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Solutions | EasyLink Technologies',
  description: 'Scalable cloud infrastructure, migration and management for AWS, Azure, and Google Cloud.',
}

export default function Page() {
  const solution = getSolutionBySlug('cloud-solutions')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
