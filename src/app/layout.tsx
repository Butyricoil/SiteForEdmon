import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Ремонт от Эдмона',
  description: 'Качественный ремонт квартир в Краснодаре',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="stylesheet" href="/css/fonts.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="/js/jquery-3.7.1.min.js" />
        <Script src="/js/bootstrap.bundle.min.js" />
        <Script src="/js/parallax.min.js" />
      </body>
    </html>
  )
} 