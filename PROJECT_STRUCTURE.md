# Структура проекта Portfolio Website

```
portfolio-website/
│
├── app/                                # Next.js App Router
│   ├── api/                           # API Routes
│   │   └── contact/
│   │       └── route.ts               # Обработчик формы контактов
│   ├── layout.tsx                     # Root layout с метаданными
│   ├── page.tsx                       # Главная страница
│   ├── globals.css                    # Глобальные стили
│   ├── metadata.ts                    # SEO метаданные
│   ├── sitemap.ts                     # Генератор sitemap.xml
│   └── manifest.ts                    # PWA manifest
│
├── components/                        # React компоненты
│   ├── sections/                      # Секции страницы
│   │   ├── Hero.tsx                   # Главный экран
│   │   ├── About.tsx                  # Обо мне
│   │   ├── Skills.tsx                 # Навыки
│   │   ├── Projects.tsx               # Проекты
│   │   ├── Experience.tsx             # Опыт работы
│   │   ├── Testimonials.tsx           # Отзывы
│   │   ├── Contact.tsx                # Форма контактов
│   │   └── Footer.tsx                 # Подвал сайта
│   └── ui/                            # UI компоненты
│       └── Preloader.tsx              # Прелоадер
│
├── public/                            # Статические файлы
│   ├── projects/                      # Изображения проектов
│   │   ├── vpn-bot.jpg
│   │   ├── codecleaner.jpg
│   │   ├── todo-spring.jpg
│   │   ├── call-agent.jpg
│   │   └── task-tracker.jpg
│   ├── icon-192.png                   # PWA иконка 192x192
│   ├── icon-512.png                   # PWA иконка 512x512
│   └── robots.txt                     # Robots.txt для SEO
│
├── node_modules/                      # Зависимости (не коммитится)
│
├── .next/                             # Next.js build (не коммитится)
│
├── .env                               # Переменные окружения (не коммитится)
├── .env.example                       # Пример переменных окружения
├── .gitignore                         # Git ignore файл
├── .eslintrc.json                     # ESLint конфигурация
│
├── next.config.ts                     # Next.js конфигурация
├── next.config.js                     # Next.js конфигурация (альтернатива)
├── tailwind.config.ts                 # Tailwind CSS конфигурация
├── postcss.config.js                  # PostCSS конфигурация
├── tsconfig.json                      # TypeScript конфигурация
│
├── package.json                       # NPM зависимости и скрипты
├── package-lock.json                  # Lockfile зависимостей
│
├── README.md                          # Основная документация
├── SETUP.md                           # Инструкция по настройке
├── DEPLOY.md                          # Руководство по деплою
├── COMMANDS.md                        # Полезные команды
├── CHANGELOG.md                       # История изменений
├── CONTRIBUTING.md                    # Руководство для контрибьюторов
├── LICENSE                            # MIT лицензия
└── PROJECT_STRUCTURE.md               # Этот файл
```

## Описание ключевых файлов

### Конфигурационные файлы

**package.json**
- Зависимости проекта
- NPM скрипты (dev, build, start, lint)
- Метаданные проекта

**next.config.ts**
- Конфигурация Next.js
- Настройки изображений
- Переменные окружения

**tailwind.config.ts**
- Кастомные цвета
- Анимации
- Расширения темы

**tsconfig.json**
- Настройки TypeScript
- Path aliases (@/*)
- Компилятор опции

### App Router

**app/layout.tsx**
- Root layout компонент
- Глобальные метаданные
- Шрифты (Inter)

**app/page.tsx**
- Главная страница
- Импорт всех секций
- Preloader

**app/globals.css**
- Tailwind директивы
- Кастомные утилиты (glass, gradient-text)
- Scrollbar стили

### Компоненты секций

**Hero.tsx** (Главный экран)
- Анимированный фон с градиентами
- Имя и должность
- CTA кнопки
- Социальные ссылки
- Scroll indicator

**About.tsx** (Обо мне)
- Аватар с градиентом
- Биография
- Образование
- Сильные стороны

**Skills.tsx** (Навыки)
- Категории навыков
- Прогресс-бары с анимацией
- Дополнительные технологии (теги)

**Projects.tsx** (Проекты)
- Сетка карточек проектов
- Изображения проектов
- Технологии (теги)
- Ссылки на GitHub и Demo

**Experience.tsx** (Опыт)
- Вертикальный таймлайн
- Компании и должности
- Периоды работы
- Достижения

**Testimonials.tsx** (Отзывы)
- Карусель отзывов
- Навигация (prev/next)
- Dots индикатор

**Contact.tsx** (Контакты)
- Форма обратной связи
- Валидация полей
- Контактная информация
- Социальные сети

**Footer.tsx** (Подвал)
- Быстрые ссылки
- Контакты
- Социальные сети
- Copyright

### UI компоненты

**Preloader.tsx**
- Анимация загрузки
- Spinner
- Fade out эффект

### API Routes

**app/api/contact/route.ts**
- POST endpoint для формы
- Интеграция с Resend
- Валидация данных
- Отправка email

## Технологический стек

### Frontend
- **Next.js 15+** - React фреймворк с App Router
- **React 18** - UI библиотека
- **TypeScript** - статическая типизация
- **Tailwind CSS** - utility-first CSS фреймворк
- **Framer Motion** - анимации и переходы
- **Lucide React** - иконки

### Backend
- **Next.js API Routes** - serverless функции
- **Resend** - отправка email (опционально)

### DevOps
- **Vercel** - хостинг и деплой (рекомендуется)
- **Git** - контроль версий
- **ESLint** - линтер кода
- **PostCSS** - обработка CSS

## Ключевые особенности

### Производительность
- ⚡ Server-side rendering (SSR)
- 🚀 Static generation где возможно
- 📦 Автоматическая оптимизация бандла
- 🖼️ Оптимизация изображений (Next.js Image)
- 💨 Lazy loading компонентов

### SEO
- 🔍 Метаданные для всех страниц
- 🗺️ Автоматическая генерация sitemap
- 🤖 Robots.txt
- 📱 Open Graph теги
- 🐦 Twitter Card метаданные

### Доступность
- ♿ WCAG 2.1 AA совместимость
- ⌨️ Keyboard navigation
- 🎯 ARIA атрибуты
- 🔊 Screen reader поддержка

### Анимации
- ✨ Framer Motion для плавных переходов
- 🎭 Scroll-triggered анимации
- 🌊 Parallax эффекты
- 💫 Hover эффекты

### Адаптивность
- 📱 Mobile-first подход
- 💻 Адаптация под все устройства
- 🖥️ Breakpoints: mobile, tablet, desktop

## Размеры и метрики

### Размер бандла (примерно)
- First Load JS: ~85 KB
- Total Size: ~120 KB (gzipped)

### Lighthouse Score (цель)
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Поддержка браузеров
- Chrome (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- Edge (последние 2 версии)

## Переменные окружения

```env
# Resend API (опционально)
RESEND_API_KEY=your_api_key

# Email для получения сообщений
CONTACT_EMAIL=pakhomovmichael@icloud.com
```

## Команды разработки

```bash
# Разработка
npm run dev          # Запуск dev-сервера на localhost:3000

# Production
npm run build        # Сборка для production
npm start            # Запуск production сервера

# Качество кода
npm run lint         # Проверка ESLint
npm run type-check   # Проверка TypeScript (если добавлен скрипт)
```

## Деплой

### Рекомендуемые платформы
1. **Vercel** (рекомендуется) - нативная поддержка Next.js
2. **Netlify** - отличная альтернатива
3. **Railway** - простой деплой
4. **Render** - бесплатный tier

## Будущие улучшения

### Планируется добавить
- [ ] Блог секция с MDX
- [ ] CMS интеграция (Contentful/Sanity)
- [ ] Темная/светлая тема переключатель
- [ ] Мультиязычность (i18n)
- [ ] 3D элементы (Three.js/React Three Fiber)
- [ ] Google Analytics
- [ ] Admin панель

## Контакты

**Михаил Пахомов**
- 🐙 GitHub: [@pakhomovmd](https://github.com/pakhomovmd)
- 📧 Email: pakhomovmichael@icloud.com
- 💬 Telegram: @hellap7ay3r

---

Последнее обновление: 01.06.2026
