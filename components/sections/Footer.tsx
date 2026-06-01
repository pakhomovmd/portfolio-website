'use client'

import { Github, Send, Mail, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Mikhail Pakhomov</h3>
            <p className="text-gray-400">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary transition-colors">
                  {t.footer.skills}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">
                  {t.footer.projects}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:pakhomovmichael@icloud.com" className="hover:text-primary transition-colors">
                  pakhomovmichael@icloud.com
                </a>
              </li>
              <li>
                <a href="tel:+79171071577" className="hover:text-primary transition-colors">
                  +7 (917) 107-15-77
                </a>
              </li>
              <li>
                <a href="https://t.me/hellap7ay3r" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Telegram: @hellap7ay3r
                </a>
              </li>
              <li className="text-gray-500">
                {t.contact.locationValue}
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/pakhomovmd"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/hellap7ay3r"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Telegram"
          >
            <Send className="w-5 h-5" />
          </a>
          <a
            href="mailto:pakhomovmichael@icloud.com"
            className="p-3 glass hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-white/10 pt-8">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Mikhail Pakhomov. {t.footer.madeWith} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t.footer.and} Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
