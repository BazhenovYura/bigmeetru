'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CalendarSection } from '@/components/calendar-section'
import { useCallback } from 'react'

export default function CalendarPage() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation scrollToSection={scrollToSection} />
      
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-transparent to-transparent" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm">
              📅 Все мероприятия в одном месте
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Календарь событий
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Присоединяйтесь к нашим мероприятиям, вебинарам и встречам. 
            Все события обновляются в реальном времени.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://calendar.google.com/calendar/u/0?cid=MTI1MDI1ZTYyOTJmYTkyNGU2YzQwYTA3ODFhZjg5NmEzMjgyM2NmZjMzOTU4NTAwOWJiNGU5NmE4OGM0YWU2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Подписаться на календарь
            </a>
            
            <button
              onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Смотреть все события
            </button>
          </div>
        </div>
      </section>

      <CalendarSection />

      <section className="py-16 px-4 bg-gradient-to-t from-purple-600/5 to-transparent">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-400">мероприятий в месяц</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">500+</div>
              <div className="text-gray-400">участников ежемесячно</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-400">доступ к записям</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">Бесплатно</div>
              <div className="text-gray-400">все мероприятия</div>
            </div>
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
