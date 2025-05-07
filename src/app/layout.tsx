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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/parallax-js@3.1.0/dist/parallax.min.js" />
      </body>
    </html>
  )
} 