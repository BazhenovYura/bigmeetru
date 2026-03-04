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
      
      {/* Героическая секция */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Анимированный фон */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm">
              🎉 15+ мероприятий каждый месяц
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Календарь событий BIGMEET
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            Ваш личный планировщик мероприятий. Добавьте календарь и будьте в курсе всех событий, 
            регистрируйтесь в один клик и планируйте своё время с умом.
          </p>

          {/* CTA Кнопки */}
          <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up animation-delay-300">
            <a
              href="https://calendar.google.com/calendar/u/0?cid=MTI1MDI1ZTYyOTJmYTkyNGU2YzQwYTA3ODFhZjg5NmEzMjgyM2NmZjMzOTU4NTAwOWJiNGU5NmE4OGM0YWU2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center gap-3 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Добавить календарь бесплатно
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <button
              onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all text-lg"
            >
              Посмотреть события
            </button>
          </div>
        </div>
      </section>

      {/* Секция с календарем */}
      <CalendarSection />

      {/* Преимущества для участника */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Почему стоит добавить календарь?
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Карточка 1: Все события в одном месте */}
            <div className="glass-card p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Все события в одном месте</h3>
              <p className="text-gray-400 mb-4">
                Больше не нужно искать по разным сайтам и соцсетям. Все мероприятия BIGMEET 
                автоматически появляются в вашем Google календаре.
              </p>
              <div className="text-sm text-purple-400">Обновление в реальном времени</div>
            </div>

            {/* Карточка 2: Мгновенная регистрация */}
            <div className="glass-card p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Регистрация в 1 клик</h3>
              <p className="text-gray-400 mb-4">
                Увидели интересное событие? Нажмите на него в календаре и сразу переходите 
                к регистрации. Никаких лишних действий.
              </p>
              <div className="text-sm text-pink-400">Доступно на всех устройствах</div>
            </div>

            {/* Карточка 3: Планирование времени */}
            <div className="glass-card p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Умное планирование</h3>
              <p className="text-gray-400 mb-4">
                Видите сразу все мероприятия на неделю и месяц. Легко планируйте своё время 
                и никогда ничего не пропускайте.
              </p>
              <div className="text-sm text-blue-400">Синхронизация с Google Calendar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Типы мероприятий */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-600/5 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Разнообразие форматов
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Мастер-классы */}
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="font-semibold">Мастер-классы</div>
            </div>

            {/* Вебинары */}
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="font-semibold">Вебинары</div>
            </div>

            {/* Нетворкинг */}
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="font-semibold">Нетворкинг</div>
            </div>

            {/* Офлайн встречи */}
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
              </div>
              <div className="font-semibold">Офлайн встречи</div>
            </div>

            {/* Флешмобы */}
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="font-semibold">Флешмобы</div>
            </div>

            {/* Личные консультации */}
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="font-semibold">Личные консультации</div>
            </div>

            {/* Благотворительность */}
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="font-semibold">Благотворительность</div>
            </div>

            {/* Встречи с экспертами */}
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="font-semibold">Встречи с экспертами</div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика и цифры */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-400">мероприятий ежемесячно</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">500+</div>
              <div className="text-gray-400">активных участников</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-400">доступ к записям</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-400">бесплатно</div>
            </div>
          </div>
        </div>
      </section>

      {/* Финальный CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Начните планировать с умом
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Добавьте календарь BIGMEET прямо сейчас и никогда не пропускайте интересные события
          </p>
          <a
            href="https://calendar.google.com/calendar/u/0?cid=MTI1MDI1ZTYyOTJmYTkyNGU2YzQwYTA3ODFhZjg5NmEzMjgyM2NmZjMzOTU4NTAwOWJiNGU5NmE4OGM0YWU2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 text-xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Добавить календарь
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
