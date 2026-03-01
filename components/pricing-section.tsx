import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-400 text-sm font-medium mb-4">ТАРИФЫ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            {'Выберите подходящий '}<span className="gradient-text">план</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Начните бесплатно и масштабируйтесь по мере роста ваших мероприятий
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="glass rounded-3xl p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Старт</h3>
              <p className="text-gray-400 text-sm">Для первых мероприятий</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">{'\u20BD0'}</span>
              <span className="text-gray-400">/месяц</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              {['До 50 регистраций', 'QR-билеты', 'Google Calendar', 'Базовая статистика'].map(
                (item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <a
              href="https://app.leadteh.ru/w/dok15?referer=@BazhenovYuri&from=bmvercel3"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="outline"
                className="w-full border-gray-700 text-white hover:bg-white/5"
              >
                Начать
              </Button>
            </a>
          </div>

          {/* Pro Plan */}
          <div className="relative glass rounded-3xl p-6 gradient-border">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-xs font-medium px-4 py-1 rounded-full">
                ПОПУЛЯРНЫЙ
              </span>
            </div>
            <div className="mb-6 pt-2">
              <h3 className="text-xl font-semibold mb-2 text-white">Про</h3>
              <p className="text-gray-400 text-sm">Для активных организаторов</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold gradient-text">{'1 990\u20BD'}</span>
              <span className="text-gray-400">/месяц</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Неограниченные регистрации',
                'Все функции Старта',
                'Рассылки участникам',
                'Реферальная система',
                'Прием оплат',
                'Приоритетная поддержка',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://app.leadteh.ru/w/dok15?referer=@BazhenovYuri&from=bmvercel4&cmd=pay"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white py-3 px-6 rounded-xl font-medium transition-all hover:scale-105 text-center"
            >
              Выбрать Про
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="glass rounded-3xl p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Бизнес</h3>
              <p className="text-gray-400 text-sm">Для крупных компаний</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">Индивидуально</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Все функции Про',
                'API доступ',
                'Интеграции',
                'SLA и поддержка 24/7',
                'Персональный менеджер',
                'Обучение команды',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="http://BazhenovYuri.t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="outline"
                className="w-full border-gray-700 text-white hover:bg-white/5"
              >
                Связаться
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
