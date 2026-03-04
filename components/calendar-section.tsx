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
