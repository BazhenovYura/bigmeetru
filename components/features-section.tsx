import {
  Users,
  QrCode,
  Calendar,
  Mail,
  Gift,
  Star,
} from 'lucide-react'

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Умная регистрация',
    description:
      'Автоматическое сохранение участников в базу данных с сегментацией по статусам: оплатили, интересовались, просто смотрели.',
  },
  {
    icon: <QrCode className="w-6 h-6" />,
    title: 'QR-билеты',
    description:
      'Уникальные коды для каждого участника. Сканер на входе проверяет оплату, тариф и блокирует дубликаты.',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Google Calendar',
    description:
      'Автоматическое создание календаря мероприятия. Участники видят все события в телефоне без соцсетей.',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Рассылки',
    description:
      'Отправка сообщений внутри бота без спам-блокировок. Напоминания, отмены, подтолкнуть к оплате.',
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: 'Рефералки и промокоды',
    description:
      'Отслеживайте кто привел друга. Промокоды с ограниченным сроком — мотивация купить заранее.',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Отзывы и репутация',
    description:
      'Отзывы только от реальных участников. Фильтр недобросовестных организаторов и контент для постов.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0a1a] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-violet-400 text-sm font-medium mb-4">ВОЗМОЖНОСТИ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            {'Все для организации '}<span className="gradient-text">мероприятий</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            От регистрации до сбора отзывов — бот закрывает всю рутину организатора
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass rounded-3xl p-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <div className="text-violet-400 group-hover:text-cyan-400 transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
