'use client'

import { useState, useEffect } from 'react'

export function CalendarSection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 px-4" id="calendar">
      <div className="container mx-auto">
        <div className="relative w-full rounded-2xl overflow-hidden glass-card">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]/80 backdrop-blur-sm z-10">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400">Загрузка календаря...</p>
              </div>
            </div>
          )}
          
          {/* Вставляем ваш iframe код */}
          <iframe 
            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Asia%2FYekaterinburg&showPrint=0&showCalendars=0&mode=AGENDA&src=MTI1MDI1ZTYyOTJmYTkyNGU2YzQwYTA3ODFhZjg5NmEzMjgyM2NmZjMzOTU4NTAwOWJiNGU5NmE4OGM0YWU2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%230b8043"
            className="w-full min-h-[600px]"
            style={{ 
              border: 'none',
              background: 'white',
              filter: 'invert(90%) hue-rotate(180deg)'
            }}
            frameBorder="0"
            scrolling="no"
            onLoad={() => setIsLoading(false)}
            title="Google Calendar"
          />
        </div>

        {/* Информация о мероприятиях */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Еженедельные встречи</h3>
            <p className="text-gray-400">Каждый вторник в 19:00</p>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Вебинары</h3>
            <p className="text-gray-400">2 раза в месяц</p>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Нетворкинг</h3>
            <p className="text-gray-400">Каждую пятницу</p>
          </div>
        </div>

        {/* Кнопка добавления в календарь */}
        <div className="mt-8 text-center">
          <a
            href="https://calendar.google.com/calendar/u/0?cid=MTI1MDI1ZTYyOTJmYTkyNGU2YzQwYTA3ODFhZjg5NmEzMjgyM2NmZjMzOTU4NTAwOWJiNGU5NmE4OGM0YWU2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Добавить календарь
          </a>
        </div>
      </div>
    </section>
  )
}
