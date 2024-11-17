'use client';

import BentoGrid from '@/components/custom-components/BentoGrid';
import Hero from '@/components/custom-components/Hero';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-8 pt-8">
      <Hero />
      <BentoGrid />
    </div>
  );
};

export default HomePage;
