import {
  CalendarDays,
  TrendingUp,
  Users,
  MessageSquare,
} from 'lucide-react'

const forWhom = [
  {
    icon: <CalendarDays className="w-8 h-8" />,
    title: 'Организаторам мероприятий',
    description: 'Автоматизируйте рутину от регистрации до поста в соцсетях',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Бизнесу и стартапам',
    description: 'Проводите нетворкинги, митапы и конференции профессионально',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Образовательным проектам',
    description: 'Управляйте записями на вебинары, курсы и тренинги',
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Спикерам и экспертам',
    description: 'Собирайте аудиторию на выступления и мастер-классы',
  },
]

export function ForWhomSection() {
  return (
    <section id="for-whom" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-900/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-cyan-400 text-sm font-medium mb-4">ДЛЯ КОГО</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              {'Кому подойдет '}<span className="gradient-text">BIGMEET</span>
            </h2>
            <p className="text-gray-400 mb-10">
              Бот создан для всех, кто организует встречи, мероприятия и хочет автоматизировать
              рутинные процессы
            </p>

            <div className="flex flex-col gap-4">
              {forWhom.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 glass rounded-2xl p-5 group hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 text-violet-400 group-hover:text-cyan-400 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-cyan-600/30 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white/5 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">Регистрации</span>
                    <span className="text-violet-400 font-semibold">+127</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">Оплаты</span>
                    <span className="text-cyan-400 font-semibold">+89</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">QR отсканировано</span>
                    <span className="text-green-400 font-semibold">76/89</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Конверсия</span>
                  <span className="text-2xl font-bold gradient-text">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
