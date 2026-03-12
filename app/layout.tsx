import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { YandexMetrika } from '@/components/YandexMetrika'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'BIGMEET - Умный планер мероприятий',
  description: 'Автоматизируйте организацию встреч от регистрации до сбора отзывов. QR-билеты, календари, рассылки — всё в одном боте.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Для старых браузеров и SEO */}
        <meta name="yandex-verification" content="ваш_код_верификации" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <YandexMetrika />
      </body>
    </html>
  )
}
