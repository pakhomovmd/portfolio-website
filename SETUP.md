# Инструкция по запуску проекта

## Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка переменных окружения (опционально)

Если хотите использовать функцию отправки email через форму контактов:

```bash
cp .env.example .env
```

Затем добавьте свой API ключ от [Resend](https://resend.com):

```
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=your_email@example.com
```

### 3. Запуск dev-сервера

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Кастомизация контента

### Личная информация

Обновите следующие файлы:

1. **Hero секция** (`components/sections/Hero.tsx`):
   - Имя
   - Должность
   - Описание
   - Ссылки на соцсети

2. **About секция** (`components/sections/About.tsx`):
   - Биография
   - Образование
   - Сильные стороны

3. **Skills секция** (`components/sections/Skills.tsx`):
   - Список навыков по категориям
   - Уровень владения (в процентах)

4. **Projects секция** (`components/sections/Projects.tsx`):
   - Название проекта
   - Описание
   - Технологии
   - Ссылки на GitHub и Demo

5. **Experience секция** (`components/sections/Experience.tsx`):
   - Компания
   - Должность
   - Период работы
   - Достижения

6. **Contact секция** (`components/sections/Contact.tsx`):
   - Email
   - Телефон
   - Локация
   - Социальные сети

### Цветовая схема

Измените цвета в `tailwind.config.ts`:

```typescript
colors: {
  background: '#0a0a0a',    // Фон
  foreground: '#ededed',    // Текст
  primary: '#3b82f6',       // Основной цвет
  secondary: '#8b5cf6',     // Вторичный цвет
  accent: '#06b6d4',        // Акцентный цвет
}
```

## Деплой

### Vercel (рекомендуется)

1. Загрузите проект на GitHub
2. Зайдите на [vercel.com](https://vercel.com)
3. Нажмите "Import Project"
4. Выберите ваш репозиторий
5. Деплой произойдет автоматически

### Netlify

1. Загрузите проект на GitHub
2. Зайдите на [netlify.com](https://netlify.com)
3. Нажмите "Add new site"
4. Выберите ваш репозиторий
5. Build command: `npm run build`
6. Publish directory: `.next`

## Оптимизация

### Изображения проектов

Добавьте изображения ваших проектов в папку `public/projects/`:

```
public/
  projects/
    vpn-bot.jpg
    codecleaner.jpg
    todo-spring.jpg
    call-agent.jpg
    task-tracker.jpg
```

Затем обновите пути в `components/sections/Projects.tsx`.

### SEO

Обновите метаданные в `app/layout.tsx`:

- Title
- Description
- Keywords
- Open Graph теги

## Производительность

Проект оптимизирован для достижения высоких показателей Lighthouse:

- ⚡ Performance: 95+
- ♿ Accessibility: 95+
- 🎯 Best Practices: 95+
- 🔍 SEO: 95+

## Поддержка

Если возникли вопросы:

- GitHub: [@pakhomovmd](https://github.com/pakhomovmd)
- Email: pakhomovmichael@icloud.com
- Telegram: @hellap7ay3r

---

Удачи с вашим портфолио! 🚀
