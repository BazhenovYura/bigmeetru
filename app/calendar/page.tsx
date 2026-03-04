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
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
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
              <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
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
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
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
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">🎯</div>
              <div className="font-semibold">Мастер-классы</div>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">💻</div>
              <div className="font-semibold">Вебинары</div>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">🤝</div>
              <div className="font-semibold">Нетворкинг</div>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">🏢</div>
              <div className="font-semibold">Офлайн встречи</div>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">🎪</div>
              <div className="font-semibold">Флешмобы</div>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">👤</div>
              <div className="font-semibold">Личные консультации</div>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">❤️</div>
              <div className="font-semibold">Благотворительность</div>
            </div>
            <div className="glass-card p-6 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl mb-3">🎤</div>
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
