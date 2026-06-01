import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Михаил Пахомов | Junior Developer',
  description: 'Fullstack разработчик специализирующийся на Python, Java, React и современных веб-технологиях. Портфолио проектов и контакты.',
  keywords: ['Python', 'Java', 'React', 'FastAPI', 'Spring Boot', 'Fullstack Developer', 'Junior Developer'],
  authors: [{ name: 'Михаил Пахомов' }],
  openGraph: {
    title: 'Михаил Пахомов | Junior Developer',
    description: 'Fullstack разработчик специализирующийся на Python, Java, React и современных веб-технологиях.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
