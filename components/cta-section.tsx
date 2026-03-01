import { MessageCircle, ScanLine } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
          {'Готовы автоматизировать '}<span className="gradient-text">мероприятия</span>{'?'}
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Присоединяйтесь к тысячам организаторов, которые уже используют BIGMEET для своих встреч
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.leadteh.ru/w/dok15?referer=@BazhenovYuri&from=bmvercel1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="btn-shine bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white px-10 py-6 rounded-2xl text-lg font-semibold transition-all hover:scale-105 animate-pulse-glow w-full">
              <MessageCircle className="w-5 h-5 mr-2" />
              Перейти в бота
            </Button>
          </a>
          <a
            href="https://teletype.in/@bigmeet/nachalo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-white/5 px-10 py-6 rounded-2xl text-lg font-medium transition-all w-full"
            >
              <ScanLine className="w-5 h-5 mr-2" />
              Инструкция
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
