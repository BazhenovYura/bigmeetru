import { MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  scrollToSection: (id: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: '3s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Уже работает в Telegram</span>
        </div>

        {/* Main Title */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="gradient-text">BIGMEET</span>
        </h1>

        <p
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Умный планер мероприятий
        </p>

        <p
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Автоматизируйте организацию встреч от регистрации до сбора отзывов. QR-билеты, календари,
          рассылки — все в одном боте.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="https://app.leadteh.ru/w/dok15?referer=@BazhenovYuri&from=bmvercel2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="btn-shine bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white px-8 py-6 rounded-2xl text-lg font-semibold transition-all hover:scale-105 animate-pulse-glow w-full">
              <MessageCircle className="w-5 h-5 mr-2" />
              Начать бесплатно
            </Button>
          </a>
          <Button
            onClick={() => scrollToSection('features')}
            variant="outline"
            className="border-gray-700 text-white hover:bg-white/5 px-8 py-6 rounded-2xl text-lg font-medium transition-all w-full sm:w-auto"
          >
            Узнать больше
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          {[
            { value: '10K+', label: 'Мероприятий' },
            { value: '50K+', label: 'Участников' },
            { value: '2x', label: 'Рост явки' },
            { value: '0\u20BD', label: 'Для старта' },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-4">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}
