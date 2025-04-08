import Hero from '../components/Hero';
import WhyItMatters from '../components/WhyItMatters';
import Heritage from '../components/Heritage';
import Facts from '../components/Facts';
import Diversity from '../components/Diversity';
import Events from '../components/Events';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <div className="flex flex-col max-w-[1440px] mx-auto">
        <Hero />
        <WhyItMatters />
        <Heritage />
        <Facts />
        <Diversity />
        <Events />
        <CTA />
      </div>
    </>
  );
}
