import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Founded in 2014, EasyLink Technologies is East Africa\'s trusted ICT support partner. Over two decades of combined expertise serving 150+ businesses across Kenya and East Africa.',
  keywords: [
    'about EasyLink Technologies',
    'ICT company Kenya',
    'IT company Nairobi',
    'EasyLink Technologies history',
    'IT support company East Africa',
    'managed IT company Kenya',
    'Ephraim John EasyLink',
  ],
  alternates: { canonical: 'https://www.easylink.co.ke/about' },
  openGraph: {
    title: 'About Us | EasyLink Technologies',
    description:
      'Founded in 2014, EasyLink Technologies has grown into East Africa\'s trusted ICT support partner serving 150+ businesses.',
    url: 'https://www.easylink.co.ke/about',
    images: [{ url: '/images/team/team.png', width: 1200, height: 630 }],
  },
}
