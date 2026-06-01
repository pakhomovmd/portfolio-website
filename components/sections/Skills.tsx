'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillsData = {
  Backend: [
    { name: 'Python', level: 90 },
    { name: 'FastAPI', level: 85 },
    { name: 'Django', level: 75 },
    { name: 'Java', level: 80 },
    { name: 'Spring Boot', level: 80 },
    { name: 'Spring Security', level: 75 },
  ],
  Frontend: [
    { name: 'React', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Next.js', level: 75 },
  ],
  Databases: [
    { name: 'PostgreSQL', level: 85 },
    { name: 'SQLAlchemy', level: 85 },
    { name: 'Hibernate', level: 75 },
  ],
  'DevOps & Tools': [
    { name: 'Git', level: 90 },
    { name: 'Linux', level: 80 },
    { name: 'Docker', level: 70 },
    { name: 'Maven', level: 75 },
    { name: 'npm', level: 85 },
  ],
  'AI/ML': [
    { name: 'Hugging Face', level: 75 },
    { name: 'OpenCV', level: 70 },
    { name: 'YOLO', level: 65 },
    { name: 'NLP', level: 70 },
  ],
}

export default function Skills() {
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
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">
            Навыки
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary group-hover:text-accent transition-colors">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                        />
                      </div>
                    </div>
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
            <h3 className="text-2xl font-semibold mb-6 text-gray-400">Дополнительные технологии</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['REST API', 'JWT', 'OAuth', 'Webhook', 'Microservices', 'SPA', 'Async/Await', 'JUnit', 'JaCoCo', 'Telegram Bot API', 'Framer Motion', 'RxJS'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
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
