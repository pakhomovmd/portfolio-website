# Полезные команды для разработки

## Основные команды

### Установка и запуск
```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build

# Запуск production сервера
npm start

# Проверка кода (ESLint)
npm run lint
```

## Git команды

### Первоначальная настройка
```bash
# Инициализация репозитория
git init

# Добавить все файлы
git add .

# Первый коммит
git commit -m "Initial commit: Portfolio website"

# Создать main ветку
git branch -M main

# Добавить remote репозиторий
git remote add origin https://github.com/pakhomovmd/portfolio-website.git

# Push в GitHub
git push -u origin main
```

### Работа с ветками
```bash
# Создать новую ветку
git checkout -b feature/new-feature

# Переключиться на ветку
git checkout main

# Список веток
git branch

# Удалить ветку
git branch -d feature/old-feature
```

### Обновление кода
```bash
# Проверить статус
git status

# Добавить изменения
git add .

# Коммит с сообщением
git commit -m "Update: description of changes"

# Push изменений
git push origin main

# Pull последних изменений
git pull origin main
```

## Очистка и оптимизация

### Очистка кэша
```bash
# Удалить node_modules и lock файлы
rm -rf node_modules package-lock.json

# Переустановить зависимости
npm install

# Очистить Next.js кэш
rm -rf .next

# Пересобрать проект
npm run build
```

### Анализ размера бандла
```bash
# Установить анализатор
npm install --save-dev @next/bundle-analyzer

# Добавить в next.config.js:
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true',
# })
# module.exports = withBundleAnalyzer(nextConfig)

# Запустить анализ
ANALYZE=true npm run build
```

## Тестирование

### Lighthouse (Chrome DevTools)
```bash
# 1. Открыть Chrome DevTools (F12)
# 2. Перейти во вкладку Lighthouse
# 3. Выбрать категории для проверки
# 4. Нажать "Analyze page load"
```

### Проверка адаптивности
```bash
# Тестирование на разных разрешениях:
# - Mobile: 375x667 (iPhone SE)
# - Tablet: 768x1024 (iPad)
# - Desktop: 1920x1080
```

## Деплой команды

### Vercel
```bash
# Установить Vercel CLI
npm install -g vercel

# Логин
vercel login

# Деплой
vercel

# Production деплой
vercel --prod
```

### Netlify
```bash
# Установить Netlify CLI
npm install -g netlify-cli

# Логин
netlify login

# Деплой
netlify deploy

# Production деплой
netlify deploy --prod
```

## Обновление зависимостей

### Проверка устаревших пакетов
```bash
# Показать устаревшие пакеты
npm outdated

# Обновить все пакеты (осторожно!)
npm update

# Обновить конкретный пакет
npm update next

# Обновить до последней версии
npm install next@latest
```

### Безопасность
```bash
# Проверка уязвимостей
npm audit

# Автоматическое исправление
npm audit fix

# Принудительное исправление (может сломать совместимость)
npm audit fix --force
```

## Полезные скрипты

### Добавить в package.json
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "clean": "rm -rf .next node_modules",
    "reinstall": "npm run clean && npm install"
  }
}
```

## Отладка

### Проверка портов
```bash
# Проверить, занят ли порт 3000
lsof -i :3000

# Убить процесс на порту 3000
kill -9 $(lsof -t -i:3000)

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Логирование
```bash
# Запуск с подробными логами
DEBUG=* npm run dev

# Только Next.js логи
DEBUG=next:* npm run dev
```

## Бэкап

### Создание бэкапа
```bash
# Создать архив проекта (без node_modules)
tar -czf portfolio-backup-$(date +%Y%m%d).tar.gz \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  .

# Или использовать zip
zip -r portfolio-backup-$(date +%Y%m%d).zip . \
  -x "node_modules/*" \
  -x ".next/*" \
  -x ".git/*"
```

## Мониторинг производительности

### Измерение времени сборки
```bash
# Засечь время сборки
time npm run build

# Подробная статистика
npm run build -- --profile
```

### Проверка размера
```bash
# Размер .next папки
du -sh .next

# Размер node_modules
du -sh node_modules

# Общий размер проекта
du -sh .
```

## Troubleshooting

### Частые проблемы

**Проблема:** Port 3000 already in use
```bash
# Решение: убить процесс или использовать другой порт
npm run dev -- -p 3001
```

**Проблема:** Module not found
```bash
# Решение: переустановить зависимости
rm -rf node_modules package-lock.json
npm install
```

**Проблема:** Build fails
```bash
# Решение: очистить кэш и пересобрать
rm -rf .next
npm run build
```

**Проблема:** TypeScript errors
```bash
# Решение: проверить типы
npm run type-check
```

---

## Контакты для поддержки

- 📧 Email: pakhomovmichael@icloud.com
- 💬 Telegram: @hellap7ay3r
- 🐙 GitHub: [@pakhomovmd](https://github.com/pakhomovmd)

Удачной разработки! 🚀
