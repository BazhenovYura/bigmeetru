import { Calendar, MessageCircle, Share2 } from 'lucide-react'

interface FooterProps {
  scrollToSection: (id: string) => void
}

export function Footer({ scrollToSection }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 mb-4 cursor-pointer"
              aria-label="BIGMEET - на главную"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">BIGMEET</span>
            </button>
            <p className="text-gray-400 text-sm max-w-sm mb-6">
              Умный планер мероприятий в Telegram. Автоматизируйте регистрацию, билеты, рассылки и
              сбор отзывов.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://app.leadteh.ru/w/dok15?referer=@BazhenovYuri&from=bmvercel5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Telegram бот"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://teletype.in/@bigmeet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Блог"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Продукт</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Возможности
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('for-whom')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Для кого
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Тарифы
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Поддержка</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://teletype.in/@bigmeet/nachalo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Инструкция
                </a>
              </li>
              <li>
                <a
                  href="http://BazhenovYuri.t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Написать автору
                </a>
              </li>
              <li>
                <a
                  href="https://bigmeet.ru/novyj-funkcional"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Новый функционал
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">{'© 2025 BIGMEET. Все права защищены.'}</p>
          <p className="text-sm text-gray-500">
            {'Сделано с '}
            <a
              href="http://BazhenovYuri.t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300"
            >
              любовью
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
