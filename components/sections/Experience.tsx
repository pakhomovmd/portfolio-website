'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    company: 'Telegram VPN Bot',
    position: 'Junior Developer',
    period: 'Апрель 2026 - настоящее время',
    type: 'Pet Project',
    description: 'Разработка production-ready Telegram-бота для автоматизации VPN-бизнеса с полным циклом продаж.',
    achievements: [
      'Реализовал асинхронную архитектуру на aiogram 3.13',
      'Интегрировал 4 платежные системы с webhook-обработкой',
      'Спроектировал БД с 5 таблицами через async SQLAlchemy 2.0',
      'Настроил автоматизацию с APScheduler для уведомлений',
      'Выполнил деплой на VPS с systemd'
    ]
  },
  {
    company: 'CodeCleaner',
    position: 'Junior Developer',
    period: 'Февраль 2026 - настоящее время',
    type: 'Pet Project',
    description: 'Разработка веб-приложения для статического анализа кода и поиска dead code.',
    achievements: [
      'Реализовал 3 алгоритма анализа кода (Text Search, AST, Coverage-based)',
      'Создал multi-module Maven архитектуру с автоматической сборкой frontend',
      'Настроил JWT-аутентификацию с Spring Security',
      'Написал unit-тесты с JaCoCo (покрытие кода)',
      'Разработал SPA на Angular 19 с TypeScript и RxJS'
    ]
  },
  {
    company: 'Todo Spring',
    position: 'Junior Developer',
    period: 'Март 2026 - Апрель 2026',
    type: 'Pet Project',
    description: 'Разработка enterprise-уровня таск-трекера с акцентом на безопасность.',
    achievements: [
      'Реализовал двухуровневую JWT-аутентификацию (Access/Refresh)',
      'Спроектировал ролевую модель доступа',
      'Создал REST API с фильтрацией по датам и статусам',
      'Разработал реактивный frontend на Angular с RxJS',
      'Настроил HTTP interceptors для автоматической подстановки токенов'
    ]
  },
  {
    company: 'ООО "Софтлинк"',
    position: 'Стажер',
    period: 'Июль 2025 - Август 2025',
    type: 'Производственная практика',
    description: 'Разработка fullstack веб-приложения Task Tracker для управления проектами.',
    achievements: [
      'Спроектировал и реализовал REST API на FastAPI',
      'Настроил JWT-аутентификацию и асинхронную работу с PostgreSQL',
      'Создал SPA-интерфейс на React с Vite и Tailwind CSS',
      'Реализовал систему комментариев, тегов и назначения участников',
      'Спроектировал реляционную БД с 6 таблицами'
    ]
  },
  {
    company: 'Call Evaluation Agent',
    position: 'Junior Developer',
    period: 'Август 2025 - Сентябрь 2025',
    type: 'Pet Project',
    description: 'Разработка AI-агента для автоматического анализа качества телефонных звонков.',
    achievements: [
      'Интегрировал Hugging Face API (Llama-3.1-8B-Instruct)',
      'Реализовал prompt engineering для NLP-анализа',
      'Создал интерактивный веб-интерфейс на Streamlit',
      'Настроил определение тональности и генерацию рекомендаций'
    ]
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">
            Опыт работы
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                  {/* Content Card */}
                  <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-accent font-semibold mt-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    <p className="text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-accent mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
