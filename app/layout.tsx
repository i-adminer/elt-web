import { Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { TransitionProvider } from '@/components/Transitions/TransitionContext'
import { PageTransition } from '@/components/Transitions/PageTransition'
import { PagePreloader } from '@/components/Transitions/PagePreloader'
import type { Metadata } from 'next'

const font = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.easylink.co.ke'),
  title: {
    default: 'EasyLink Technologies | ICT Support Services East Africa',
    template: '%s | EasyLink Technologies',
  },
  description:
    'EasyLink Technologies provides 24/7 managed ICT support, helpdesk, cloud solutions, data protection, virtual CIO, and IT outsourcing services for businesses across East Africa.',
  keywords: [
    'ICT support Kenya',
    'managed IT services Nairobi',
    'IT support East Africa',
    'helpdesk support Kenya',
    'cloud solutions Kenya',
    'data protection Kenya',
    'IT outsourcing Kenya',
    'virtual CIO Kenya',
    'EasyLink Technologies',
    'managed ICT services',
    '24/7 IT support',
    'cybersecurity Kenya',
    'network management Nairobi',
    'IT consulting Kenya',
    'SMB IT support East Africa',
  ],
  authors: [{ name: 'EasyLink Technologies', url: 'https://www.easylink.co.ke' }],
  creator: 'EasyLink Technologies',
  publisher: 'EasyLink Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://www.easylink.co.ke',
    siteName: 'EasyLink Technologies',
    title: 'EasyLink Technologies | ICT Support Services East Africa',
    description:
      'Reliable 24/7 ICT support, cloud solutions, data protection, and managed IT services for businesses across East Africa.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EasyLink Technologies — ICT Support Services East Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyLink Technologies | ICT Support Services East Africa',
    description:
      'Reliable 24/7 ICT support, cloud solutions, data protection, and managed IT services for businesses across East Africa.',
    creator: '@Easylinktech',
    site: '@Easylinktech',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.easylink.co.ke',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <PagePreloader />
        <TransitionProvider>
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
          <PageTransition />
        </TransitionProvider>
      </body>
    </html>
  )
}
