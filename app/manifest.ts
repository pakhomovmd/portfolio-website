import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Михаил Пахомов - Portfolio',
    short_name: 'MP Portfolio',
    description: 'Fullstack разработчик специализирующийся на Python, Java, React и современных веб-технологиях',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
