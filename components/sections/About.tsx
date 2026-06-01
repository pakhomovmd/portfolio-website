'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Sparkles, Zap, Target } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const strengths = [
    {
      icon: Zap,
      title: 'Быстрое освоение',
      description: 'Новых технологий и фреймворков',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Code2,
      title: 'Асинхронное программирование',
      description: 'Python async/await, RxJS',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Проектирование архитектуры',
      description: 'REST API, микросервисы, БД',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Sparkles,
      title: 'Интеграция API',
      description: 'Внешние сервисы и платежные системы',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-400">Познакомимся</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Обо мне</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Avatar Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full max-w-md mx-auto aspect-square">
                {/* Animated Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-primary/20"
                  style={{ borderStyle: 'dashed' }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border-2 border-secondary/20"
                  style={{ borderStyle: 'dashed' }}
                />
                
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-3xl opacity-20 animate-pulse" />
                
                {/* Main Avatar */}
                <div className="relative w-full h-full glass rounded-full flex items-center justify-center border border-white/10 group hover:border-white/20 transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="text-9xl font-bold gradient-text"
                  >
                    МП
                  </motion.div>
                  
                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      animate={{
                        x: [0, Math.cos(i * 60 * Math.PI / 180) * 100, 0],
                        y: [0, Math.sin(i * 60 * Math.PI / 180) * 100, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-4 top-1/4 glass p-4 rounded-2xl border border-white/10"
                >
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-gray-400">Проектов</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 }}
                  className="absolute -right-4 bottom-1/4 glass p-4 rounded-2xl border border-white/10"
                >
                  <div className="text-3xl font-bold gradient-text">7+</div>
                  <div className="text-sm text-gray-400">Месяцев опыта</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  Я студент 4-го курса <span className="text-primary font-semibold">Самарского университета</span> по направлению 
                  "Информатика и вычислительная техника". Увлечен разработкой современных веб-приложений 
                  и исследованиями в области искусственного интеллекта.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  Вместе со своим научным руководителем занимался НИР на тему виртуальной реальности, 
                  работал с <span className="text-secondary font-semibold">OpenCV</span>, нейросетью <span className="text-accent font-semibold">YOLO</span> и 
                  инструментом разметки данных CVAT. Выступал на конференции{' '}
                  <span className="text-primary font-semibold">Volga Cyber Week 2025</span> со своим исследованием.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                  className="text-lg text-gray-300 leading-relaxed"
                >
                  Специализируюсь на fullstack разработке с использованием{' '}
                  <span className="text-primary font-semibold">Python</span> (FastAPI, Django),{' '}
                  <span className="text-secondary font-semibold">Java</span> (Spring Boot),{' '}
                  <span className="text-accent font-semibold">React</span> и Angular. 
                  Имею опыт создания production-ready приложений с интеграцией AI/ML, платежных систем и REST API.
                </motion.p>
              </div>

              {/* Strengths Grid */}
              <div className="pt-8">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                  className="text-2xl font-semibold mb-6 text-gray-200"
                >
                  Мои сильные стороны
                </motion.h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={strength.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.1 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group"
                    >
                      <div className="glass p-5 rounded-2xl border border-white/5 group-hover:border-white/20 transition-all duration-300">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${strength.gradient} bg-opacity-10 mb-3 group-hover:scale-110 transition-transform`}>
                          <strength.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-semibold mb-1 text-gray-200 group-hover:text-primary transition-colors">
                          {strength.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {strength.description}
                        </p>
                      </div>
                      
                      {/* Hover Glow */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
