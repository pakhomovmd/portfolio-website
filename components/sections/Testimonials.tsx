'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Научный руководитель',
    position: 'Начальник направления, Самарский университет',
    text: 'Михаил показал отличные результаты в научно-исследовательской работе по виртуальной реальности. Быстро освоил OpenCV, YOLO и CVAT. Успешно выступил на конференции Volga Cyber Week 2025 с качественным исследованием.',
    avatar: 'НР'
  },
  {
    name: 'Руководитель практики',
    position: 'ООО "Софтлинк"',
    text: 'За время производственной практики Михаил продемонстрировал высокий уровень технических навыков. Самостоятельно разработал fullstack приложение Task Tracker с использованием современного стека технологий. Отличное понимание архитектуры веб-приложений.',
    avatar: 'РП'
  },
  {
    name: 'Коллега по проекту',
    position: 'Fullstack Developer',
    text: 'Работал с Михаилом над несколькими pet-проектами. Впечатлила его способность быстро разбираться в новых технологиях и находить оптимальные решения. Особенно сильны навыки в Python и работе с API.',
    avatar: 'КП'
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">
            Отзывы
          </h2>

          <div className="relative">
            {/* Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass p-8 md:p-12 rounded-3xl relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/20" />

              {/* Avatar */}
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-gray-300 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 glass hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 glass hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
