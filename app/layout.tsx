import { Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { TransitionProvider } from '@/components/Transitions/TransitionContext'
import { PageTransition } from '@/components/Transitions/PageTransition'
import { PagePreloader } from '@/components/Transitions/PagePreloader'
const font = Manrope({ subsets: ['latin'] })

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
