# Portfolio Website

Современный премиальный сайт-портфолио разработчика, созданный с использованием Next.js 15, React, TypeScript и Tailwind CSS.

## 🚀 Технологии

- **Next.js 15+** - React фреймворк
- **React 18** - UI библиотека
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **Framer Motion** - анимации
- **Lucide React** - иконки

## ✨ Особенности

- 🎨 Минималистичный премиум-дизайн
- 🌙 Темная тема по умолчанию
- ✨ Плавные анимации и переходы
- 📱 Полностью адаптивный дизайн
- 🎭 Glassmorphism эффекты
- 🎯 SEO оптимизация
- ⚡ Lighthouse Score 95+
- ♿ WCAG доступность

## 📦 Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/pakhomovmd/portfolio-website.git
cd portfolio-website
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите dev-сервер:
```bash
npm run dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🏗️ Структура проекта

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Projects.tsx    # Projects section
│   │   ├── Experience.tsx  # Experience section
│   │   ├── Testimonials.tsx # Testimonials section
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer
│   └── ui/
│       └── Preloader.tsx   # Loading animation
├── public/                 # Static files
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json
```

## 🎨 Кастомизация

### Цвета

Измените цвета в `tailwind.config.ts`:

```typescript
colors: {
  background: '#0a0a0a',
  foreground: '#ededed',
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  accent: '#06b6d4',
}
```

### Контент

Обновите личную информацию в соответствующих компонентах:
- `components/sections/Hero.tsx` - имя и заголовок
- `components/sections/About.tsx` - биография
- `components/sections/Skills.tsx` - навыки
- `components/sections/Projects.tsx` - проекты
- `components/sections/Experience.tsx` - опыт работы
- `components/sections/Contact.tsx` - контактная информация

## 📝 Скрипты

- `npm run dev` - запуск dev-сервера
- `npm run build` - сборка для production
- `npm run start` - запуск production сервера
- `npm run lint` - проверка кода

## 🚀 Деплой

### Vercel (рекомендуется)

1. Загрузите проект на GitHub
2. Импортируйте в [Vercel](https://vercel.com)
3. Деплой произойдет автоматически

### Другие платформы

Проект совместим с любыми платформами, поддерживающими Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 📄 Лицензия

MIT License - используйте свободно для личных и коммерческих проектов.

## 👤 Автор

**Михаил Пахомов**

- GitHub: [@pakhomovmd](https://github.com/pakhomovmd)
- Email: pakhomovmichael@icloud.com
- Telegram: @hellap7ay3r

## 🙏 Благодарности

Дизайн вдохновлен:
- Apple
- Linear
- Vercel
- Stripe
- Raycast

---

Сделано с ❤️ и Next.js
