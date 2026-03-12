'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function YandexMetrika() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Функция инициализации метрики
    const initMetrika = () => {
      // Проверяем, не загружена ли уже метрика
      // @ts-ignore
      if (window.ym) return

      // @ts-ignore
      window.ym = function() {
        // @ts-ignore
        (window.ym.a = window.ym.a || []).push(arguments)
      }
      
      // @ts-ignore
      window.ym.l = 1 * new Date()
      
      // Создаем и добавляем скрипт
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://mc.yandex.ru/metrika/tag.js'
      
      // Добавляем обработчик загрузки
      script.onload = () => {
        // @ts-ignore
        window.ym(106793429, 'init', {
          ssr: true,
          webvisor: true,
          clickmap: true,
          ecommerce: "dataLayer",
          accurateTrackBounce: true,
          trackLinks: true,
          defer: false
        })

        // Отправляем первый хит
        const url = window.location.pathname + window.location.search
        // @ts-ignore
        window.ym(106793429, 'hit', url)
      }

      document.head.appendChild(script)
    }

    initMetrika()
  }, [])

  // Отслеживаем переходы между страницами (для SPA)
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.ym) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      
      // Отправляем хит с небольшой задержкой, чтобы страница успела прогрузиться
      setTimeout(() => {
        // @ts-ignore
        window.ym(106793429, 'hit', url)
      }, 300)
    }
  }, [pathname, searchParams])

  return (
    <>
      {/* Fallback для пользователей без JavaScript */}
      <noscript>
        <div>
          <img 
            src="https://mc.yandex.ru/watch/106793429" 
            style={{ 
              position: 'absolute', 
              left: '-9999px' 
            }} 
            alt="" 
            aria-hidden="true"
          />
        </div>
      </noscript>
    </>
  )
}
