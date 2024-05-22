import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const MabryPro = localFont({
  src: [
    {
      path: '../fonts/MabryPro.woff2',
      style: 'normal',
    },
    {
      path: '../fonts/MabryPro-italic.woff2',
      style: 'italic',
    },
    {
      path: '../fonts/MabryPro-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/MabryPro-700-italic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const metadata: Metadata = {
  title: "Codecraft",
  description: "Your one-stop shop for all things tech.",
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={MabryPro.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}