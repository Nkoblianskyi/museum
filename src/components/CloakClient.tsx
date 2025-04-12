// components/CloakClient.tsx
'use client';

import { useEffect } from 'react';

export const CloakClient = () => {
    useEffect(() => {
        // Викликаємо API маршрут до /api/cloak для обробки запиту
        fetch('/api/cloak', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                request: {},
                jsrequest: {},
                server: {
                    // Тут можуть бути дані сервера для налаштування запиту
                }
            })
        })
            .then((res) => {
                if (res.redirected) {
                    // Якщо редирект, змінюємо URL
                    window.location.href = res.url;
                } else {
                    return res.text(); // Отримуємо текстову відповідь
                }
            })
            .then((html) => {
                if (html) {
                    // Перевіряємо на наявність iframe чи HTML
                    if (html.includes('<iframe') || html.includes('<!DOCTYPE html')) {
                        document.open();
                        document.write(html);
                        document.close();
                    }
                }
            })
            .catch((error) => {
                console.error('[CLOAK ERROR]', error);
            });
    }, []);

    return null;  // Цей компонент не рендерить жодного UI, він лише викликає API
};
