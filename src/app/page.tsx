
import Hero from '../components/Hero';
import WhyItMatters from '../components/WhyItMatters';
import Heritage from '../components/Heritage';
import Facts from '../components/Facts';
import Diversity from '../components/Diversity';
import Events from '../components/Events';
import CTA from '../components/CTA';
import { CloakClient } from '@/components/CloakClient';

export default function Home() {
  return (
    <div className="flex flex-col w-full flex-1 overflow-x-hidden">
      <CloakClient />
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
