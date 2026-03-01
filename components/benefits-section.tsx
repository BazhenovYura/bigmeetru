import { Zap, Shield, Clock, TrendingUp } from 'lucide-react'

const benefits = [
  { icon: <Zap className="w-5 h-5" />, text: 'Экономия времени на организацию' },
  { icon: <Shield className="w-5 h-5" />, text: 'Защита от дубликатов и мошенников' },
  { icon: <Clock className="w-5 h-5" />, text: 'Автоматические напоминания' },
  { icon: <TrendingUp className="w-5 h-5" />, text: 'Рост конверсии в 2 раза' },
]

export function BenefitsSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-cyan-900/20 to-violet-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 glass rounded-2xl p-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center text-violet-400">
                {benefit.icon}
              </div>
              <span className="text-sm font-medium text-white">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
