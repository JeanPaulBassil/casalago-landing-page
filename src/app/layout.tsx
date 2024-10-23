import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/system'
import { Toaster } from 'react-hot-toast'
import ReactQueryClientProvider from '@/providers/ReactQueryProvider'
import Header from './_components/Header'
import Footer from './_components/Footer'
import localFont from 'next/font/local'

const baseticaFont = localFont({
  src: '../../public/fonts/Basetica-Regular.otf',
  weight: '400',
  style: 'normal',
})

export const metadata: Metadata = {
  title: 'casalago',
  description: 'Discover the finest quality furniture and accessories in Lebanon',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${baseticaFont.className} text-[#221e1f]`}>
        <ReactQueryClientProvider>
          <NextUIProvider>
            <div className="px-2 sm:px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
              <Header />
              {children}
            </div>
            <Footer />
            <Toaster position="top-right" />
          </NextUIProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}
