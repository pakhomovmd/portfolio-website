import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Валидация
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Все поля обязательны для заполнения' },
        { status: 400 }
      )
    }

    // Проверка email формата
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Некорректный email адрес' },
        { status: 400 }
      )
    }

    // Если есть Resend API ключ, отправляем через Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL || 'pakhomovmichael@icloud.com',
            subject: `Новое сообщение от ${name}`,
            html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                    .field { margin-bottom: 20px; }
                    .label { font-weight: bold; color: #3b82f6; margin-bottom: 5px; }
                    .value { background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #3b82f6; }
                    .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <h1 style="margin: 0;">📧 Новое сообщение с сайта-портфолио</h1>
                    </div>
                    <div class="content">
                      <div class="field">
                        <div class="label">👤 Имя:</div>
                        <div class="value">${name}</div>
                      </div>
                      <div class="field">
                        <div class="label">📧 Email:</div>
                        <div class="value"><a href="mailto:${email}">${email}</a></div>
                      </div>
                      <div class="field">
                        <div class="label">💬 Сообщение:</div>
                        <div class="value">${message.replace(/\n/g, '<br>')}</div>
                      </div>
                      <div class="footer">
                        <p>Отправлено: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</p>
                      </div>
                    </div>
                  </div>
                </body>
              </html>
            `,
          }),
        })

        if (!resendResponse.ok) {
          const errorData = await resendResponse.json()
          console.error('Resend API error:', errorData)
          throw new Error('Ошибка отправки через Resend')
        }

        const data = await resendResponse.json()
        return NextResponse.json({ success: true, data })
      } catch (resendError) {
        console.error('Resend error:', resendError)
        // Fallback: логируем в консоль если Resend не работает
        console.log('📧 Новое сообщение (Resend недоступен):')
        console.log(`Имя: ${name}`)
        console.log(`Email: ${email}`)
        console.log(`Сообщение: ${message}`)
        
        return NextResponse.json({ 
          success: true, 
          message: 'Сообщение получено (email сервис временно недоступен)' 
        })
      }
    } else {
      // Если нет API ключа, просто логируем
      console.log('📧 Новое сообщение с сайта:')
      console.log(`Имя: ${name}`)
      console.log(`Email: ${email}`)
      console.log(`Сообщение: ${message}`)
      console.log(`Время: ${new Date().toLocaleString('ru-RU')}`)
      console.log('---')
      
      return NextResponse.json({ 
        success: true, 
        message: 'Сообщение получено! Для настройки email добавьте RESEND_API_KEY в .env' 
      })
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Ошибка обработки запроса' },
      { status: 500 }
    )
  }
}
