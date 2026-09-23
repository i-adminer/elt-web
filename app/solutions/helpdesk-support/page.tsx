import { SolutionDetail } from '@/components/Solutions/SolutionDetail'
import { getSolutionBySlug } from '@/data/solutions'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '24/7 Helpdesk Support | EasyLink Technologies',
  description: 'Round-the-clock technical assistance for your team via phone, email, and remote access.',
}

export default function Page() {
  const solution = getSolutionBySlug('helpdesk-support')
  if (!solution) return notFound()
  return <SolutionDetail solution={solution} />
}
