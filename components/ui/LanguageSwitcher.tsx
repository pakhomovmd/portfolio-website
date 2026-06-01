'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Languages } from 'lucide-react'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10">
        <Languages className="w-4 h-4 text-gray-400" />
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'en'
              ? 'bg-primary text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('ru')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'ru'
              ? 'bg-primary text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          RU
        </button>
      </div>
    </motion.div>
  )
}
