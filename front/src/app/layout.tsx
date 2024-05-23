import type { Metadata } from 'next'
import localFont from 'next/font/local'
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

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={MabryPro.className}>
        {children}
      </body>
    </html>
  )
}