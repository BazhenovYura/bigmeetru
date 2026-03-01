import { ChevronRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Создайте мероприятие',
    description: 'Укажите название, дату, описание и настройте параметры регистрации',
  },
  {
    number: '02',
    title: 'Поделитесь ссылкой',
    description: 'Отправьте ссылку на регистрацию участникам в соцсетях или мессенджерах',
  },
  {
    number: '03',
    title: 'Следите за статистикой',
    description: 'Отслеживайте регистрации, оплаты и активность в реальном времени',
  },
  {
    number: '04',
    title: 'Проведите мероприятие',
    description: 'Сканируйте QR-коды на входе и собирайте обратную связь',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0f1a] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-violet-400 text-sm font-medium mb-4">
            КАК ЭТО РАБОТАЕТ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            {'Начните за '}<span className="gradient-text">4 шага</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Простой и интуитивно понятный процесс от создания до проведения мероприятия
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass rounded-3xl p-6 h-full">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-500/30 to-cyan-500/30 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
