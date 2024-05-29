import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import Container from '@/components/Layout/Container'
import './globals.css'

const MabryPro = localFont({
  src: [
    {
      path: '../fonts/MabryPro-Light.woff2',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../fonts/MabryPro-Regular.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../fonts/MabryPro-Italic.woff2',
      style: 'italic',
      weight: '500',
    },
    {
      path: '../fonts/MabryPro-Medium.woff2',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../fonts/MabryPro-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../fonts/MabryPro-Black.woff2',
      style: 'normal',
      weight: '900',
    },
  ],
})

export const metadata: Metadata = {
  title: "Codecraft",
  description: "Your one-stop shop for all things tech.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={MabryPro.className}>
        <Navbar />
        <main>
          <Container>
            {children}
          </Container>
        </main>
        <Footer />
      </body>
    </html>
  )
}