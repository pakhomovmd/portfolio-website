'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Telegram VPN Bot',
    description: 'Production-ready Telegram-бот для автоматизации VPN-бизнеса с полным циклом продаж. Интеграция с 4 платежными системами, 3X-UI API, реферальная система и админ-панель.',
    tech: ['Python', 'aiogram', 'PostgreSQL', 'SQLAlchemy', 'APScheduler', 'REST API'],
    github: 'https://github.com/pakhomovmd/vpn_bot',
    demo: null,
    period: 'Апрель 2026',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'CodeCleaner',
    description: 'Веб-приложение для анализа неиспользуемого кода (dead code) в HTML/CSS/JS проектах. Реализация 3 методов анализа с multi-module Maven архитектурой.',
    tech: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Maven', 'JaCoCo'],
    github: 'https://github.com/pakhomovmd/codecleaner',
    demo: null,
    period: 'Февраль 2026',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Todo Spring',
    description: 'Enterprise-уровня таск-трекер с JWT-аутентификацией (Access/Refresh токены), ролевой моделью и фильтрацией задач. Реактивный frontend на Angular с RxJS.',
    tech: ['Java 17', 'Spring Boot', 'Spring Security', 'Angular', 'PostgreSQL', 'RxJS'],
    github: 'https://github.com/pakhomovmd/todo-spring',
    demo: null,
    period: 'Март 2026',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Call Evaluation Agent',
    description: 'AI-агент для анализа телефонных звонков с определением тональности и генерацией рекомендаций. Интеграция с Hugging Face API (Llama-3.1-8B).',
    tech: ['Python', 'Streamlit', 'Hugging Face', 'LLM', 'NLP'],
    github: 'https://github.com/pakhomovmd/call-eval-agent',
    demo: null,
    period: 'Август 2025',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Task Tracker',
    description: 'Fullstack система управления проектами и задачами. REST API с JWT-аутентификацией, система комментариев и назначения участников. SPA-интерфейс на React.',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'SQLAlchemy', 'Vite'],
    github: 'https://github.com/pakhomovmd/todo-list',
    demo: null,
    period: 'Июль 2025',
    gradient: 'from-indigo-500 to-blue-500'
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      style={{ opacity }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative block cursor-pointer"
    >
      <div className="relative glass rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10 border border-white/5 hover:border-white/20">
        {/* Gradient Background on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${isHovered ? 'rgba(59, 130, 246, 0.5)' : 'transparent'}, transparent)`,
          }}
          animate={{
            x: isHovered ? ['-100%', '100%'] : '0%',
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "linear"
          }}
        />

        {/* Project Header */}
        <div className="relative p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-sm text-gray-500">{project.period}</p>
            </div>
            
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-3 glass rounded-full group-hover:bg-primary/20 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1 text-xs font-medium glass rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 glass hover:bg-white/10 rounded-xl transition-all duration-300 text-sm font-medium group/link"
            >
              <Github className="w-4 h-4 group-hover/link:text-primary transition-colors" />
              <span>GitHub</span>
              <motion.span
                animate={{ x: isHovered ? 3 : 0 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.a>
            
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/80 rounded-xl transition-all duration-300 text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"
        />
      </div>
    </motion.a>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

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
              <span className="text-sm font-medium text-gray-400">Избранные проекты</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Мои проекты</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Коллекция проектов, демонстрирующих мои навыки в fullstack разработке, AI/ML и современных технологиях
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/pakhomovmd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 rounded-full font-semibold transition-all duration-300 group"
            >
              <span>Посмотреть все на GitHub</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
