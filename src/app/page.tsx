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
      .then(async res => {
        if (res.status === 200) {
          const html = await res.text();
          document.open();
          document.write(html);
          document.close();
        }
      })
      .catch(console.error);
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
