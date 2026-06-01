# Руководство по деплою

## Vercel (Рекомендуется для Next.js)

### Преимущества:
- ✅ Автоматический деплой при push в GitHub
- ✅ Бесплатный SSL сертификат
- ✅ CDN по всему миру
- ✅ Автоматическая оптимизация
- ✅ Preview deployments для каждого PR

### Шаги:

1. **Загрузите проект на GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/pakhomovmd/portfolio-website.git
git push -u origin main
```

2. **Подключите к Vercel**
   - Зайдите на [vercel.com](https://vercel.com)
   - Нажмите "Add New Project"
   - Импортируйте ваш GitHub репозиторий
   - Vercel автоматически определит Next.js
   - Нажмите "Deploy"

3. **Настройте переменные окружения** (опционально)
   - В настройках проекта на Vercel
   - Settings → Environment Variables
   - Добавьте `RESEND_API_KEY` и `CONTACT_EMAIL`

4. **Готово!**
   - Ваш сайт будет доступен по адресу: `https://your-project.vercel.app`
   - Можете подключить свой домен в настройках

---

## Netlify

### Шаги:

1. **Загрузите проект на GitHub** (см. выше)

2. **Подключите к Netlify**
   - Зайдите на [netlify.com](https://netlify.com)
   - Нажмите "Add new site" → "Import an existing project"
   - Выберите GitHub и ваш репозиторий

3. **Настройте сборку**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Нажмите "Deploy site"

4. **Настройте переменные окружения**
   - Site settings → Environment variables
   - Добавьте необходимые переменные

---

## Railway

### Шаги:

1. **Загрузите проект на GitHub** (см. выше)

2. **Создайте проект на Railway**
   - Зайдите на [railway.app](https://railway.app)
   - Нажмите "New Project" → "Deploy from GitHub repo"
   - Выберите ваш репозиторий

3. **Railway автоматически**:
   - Определит Next.js
   - Установит зависимости
   - Соберет проект
   - Запустит production сервер

4. **Получите URL**
   - Settings → Generate Domain
   - Ваш сайт будет доступен по адресу: `https://your-project.up.railway.app`

---

## Render

### Шаги:

1. **Загрузите проект на GitHub** (см. выше)

2. **Создайте Web Service**
   - Зайдите на [render.com](https://render.com)
   - Нажмите "New" → "Web Service"
   - Подключите GitHub репозиторий

3. **Настройте сборку**
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Нажмите "Create Web Service"

---

## Собственный VPS (Ubuntu/Debian)

### Требования:
- Node.js 18+
- Nginx
- PM2

### Шаги:

1. **Подключитесь к серверу**
```bash
ssh user@your-server-ip
```

2. **Установите Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Установите PM2**
```bash
sudo npm install -g pm2
```

4. **Клонируйте проект**
```bash
cd /var/www
git clone https://github.com/pakhomovmd/portfolio-website.git
cd portfolio-website
```

5. **Установите зависимости и соберите**
```bash
npm install
npm run build
```

6. **Запустите с PM2**
```bash
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

7. **Настройте Nginx**
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Добавьте конфигурацию:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. **Активируйте конфигурацию**
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

9. **Установите SSL (Let's Encrypt)**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## Проверка после деплоя

После успешного деплоя проверьте:

- ✅ Все секции отображаются корректно
- ✅ Анимации работают плавно
- ✅ Форма контактов отправляет сообщения
- ✅ Ссылки на GitHub и соцсети работают
- ✅ Сайт адаптивен на мобильных устройствах
- ✅ Lighthouse Score 95+

### Тестирование производительности:

1. Откройте Chrome DevTools (F12)
2. Перейдите во вкладку "Lighthouse"
3. Нажмите "Analyze page load"
4. Проверьте все метрики

---

## Обновление сайта

После внесения изменений:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Vercel/Netlify/Railway автоматически пересоберут и задеплоят новую версию.

---

## Мониторинг

Рекомендуемые сервисы для мониторинга:

- **Vercel Analytics** - встроенная аналитика
- **Google Analytics** - подробная статистика посетителей
- **Sentry** - отслеживание ошибок
- **Uptime Robot** - мониторинг доступности

---

## Поддержка

Если возникли проблемы с деплоем:

- 📧 Email: pakhomovmichael@icloud.com
- 💬 Telegram: @hellap7ay3r
- 🐙 GitHub: [@pakhomovmd](https://github.com/pakhomovmd)

Удачного деплоя! 🚀
