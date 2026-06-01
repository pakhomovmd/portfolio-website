'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const skillsData = {
  Backend: [
    'Python',
    'FastAPI',
    'Django',
    'Java',
    'Spring Boot',
    'Spring Security',
  ],
  Frontend: [
    'React',
    'Angular',
    'TypeScript',
    'Tailwind CSS',
    'Next.js',
  ],
  Databases: [
    'PostgreSQL',
    'SQLAlchemy',
    'Hibernate',
  ],
  'DevOps & Tools': [
    'Git',
    'Linux',
    'Docker',
    'Maven',
    'npm',
  ],
  'AI/ML': [
    'Hugging Face',
    'OpenCV',
    'YOLO',
    'NLP',
  ],
}

export default function Skills() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
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
              <span className="text-sm font-medium text-gray-400">{t.skills.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">{t.skills.title}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              {t.skills.description}
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-white/20"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary group-hover:text-accent transition-colors">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 text-sm font-medium glass rounded-xl hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default border border-white/5 hover:border-primary/50"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-400">{t.skills.additional}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['REST API', 'JWT', 'OAuth', 'Webhook', 'Microservices', 'SPA', 'Async/Await', 'JUnit', 'JaCoCo', 'Telegram Bot API', 'Framer Motion', 'RxJS'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
