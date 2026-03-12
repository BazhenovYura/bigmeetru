'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Компонент, который использует useSearchParams
function MetrikaTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.ym) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      
      setTimeout(() => {
        // @ts-ignore
        window.ym(106793429, 'hit', url)
      }, 300)
    }
  }, [pathname, searchParams])

  return null
}

// Основной компонент
export function YandexMetrika() {
  useEffect(() => {
    // Функция инициализации метрики
    const initMetrika = () => {
      // @ts-ignore
      if (window.ym) return

      // @ts-ignore
      window.ym = function() {
        // @ts-ignore
        (window.ym.a = window.ym.a || []).push(arguments)
      }
      
      // @ts-ignore
      window.ym.l = 1 * new Date()
      
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://mc.yandex.ru/metrika/tag.js'
      
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

        const url = window.location.pathname + window.location.search
        // @ts-ignore
        window.ym(106793429, 'hit', url)
      }

      document.head.appendChild(script)
    }

    initMetrika()
  }, [])

  return (
    <>
      {/* Оборачиваем трекер в Suspense */}
      <Suspense fallback={null}>
        <MetrikaTracker />
      </Suspense>
      
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
