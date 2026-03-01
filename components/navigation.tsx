'use client'

import { useState, useEffect } from 'react'
import { Calendar, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavigationProps {
  scrollToSection: (id: string) => void
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-strong py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer"
            aria-label="BIGMEET - на главную"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">BIGMEET</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('features')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Возможности
            </button>
            <button
              onClick={() => handleNavClick('for-whom')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Для кого
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Как работает
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Тарифы
            </button>
          </div>

          <div className="hidden md:block">
            <a
              href="https://app.leadteh.ru/w/dok15?referer=@BazhenovYuri&from=bmvercel1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white px-6 py-2 rounded-xl font-medium transition-all hover:scale-105">
                Перейти в бота
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-strong mt-3 mx-4 rounded-2xl p-4 animate-scale-in">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('features')}
              className="text-left text-gray-300 hover:text-white py-2"
            >
              Возможности
            </button>
            <button
              onClick={() => handleNavClick('for-whom')}
              className="text-left text-gray-300 hover:text-white py-2"
            >
              Для кого
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-left text-gray-300 hover:text-white py-2"
            >
              Как работает
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="text-left text-gray-300 hover:text-white py-2"
            >
              Тарифы
            </button>
            <a
              href="https://app.leadteh.ru/w/dok15?referer=@BazhenovYuri&from=bmvercel1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 text-white w-full mt-2">
                Перейти в бота
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
