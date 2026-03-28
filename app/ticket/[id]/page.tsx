'use client'

import { useParams } from 'next/navigation'
import { Suspense, useCallback } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { QRCodeClient } from '@/components/QRCodeClient'

function TicketContent() {
  const params = useParams()
  const ticketId = params?.id as string
  
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  // Ссылка для активации в боте
  const qrData = `https://app.leadteh.ru/w/dpjIk?num=${ticketId}`

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navigation scrollToSection={scrollToSection} />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ваш билет
              </span>
            </h1>
            <p className="text-gray-400">
              Покажите этот QR-код контроллеру на входе
            </p>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Мероприятие BIGMEET</h2>
                  <p className="text-sm text-gray-400">Электронный билет</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-xs text-gray-500">Номер билета</p>
                  <p className="text-sm font-mono text-purple-400 break-all">{ticketId}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Статус</p>
                  <p className="text-sm font-medium text-green-400">Активен</p>
                </div>
              </div>
            </div>

            <div className="p-8 text-center bg-white/5">
              <QRCodeClient data={qrData} size={300} showDownload={true} />
            </div>

            <div className="p-6 bg-purple-500/5 border-t border-purple-500/20">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-purple-400">Как использовать:</span> Покажите этот QR-код контроллеру на входе. 
                    После сканирования билет будет активирован.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default function TicketPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Загрузка билета...</p>
        </div>
      </div>
    }>
      <TicketContent />
    </Suspense>
  )
}
