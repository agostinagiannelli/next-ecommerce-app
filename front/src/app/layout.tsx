import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '@/context/AuthContext'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import Container from '@/components/Layout/Container'

const MabryPro = localFont({
  src: [
    {
      path: '../assets/fonts/MabryPro-Light.woff2',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../assets/fonts/MabryPro-Regular.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/fonts/MabryPro-Italic.woff2',
      style: 'italic',
      weight: '500',
    },
    {
      path: '../assets/fonts/MabryPro-Medium.woff2',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../assets/fonts/MabryPro-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../assets/fonts/MabryPro-Black.woff2',
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
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main>
              <Container>
                {children}
              </Container>
              <ToastContainer stacked />
            </main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}