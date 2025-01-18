import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css';
import './app.css';
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Navbar />
            <main className="flex flex-1 items-center justify-center py-8">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}

