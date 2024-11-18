'use client';
import { NextPage } from 'next';
import About from '@/app/about/About';
import Education from '@/app/about/Education';
import MyWorkStation from '@/app/about/MyWorkStation';
import Link from 'next/link';

const AboutPage: NextPage = () => {

  return (
    <div className="space-y-8">
      <About />
      <Education />
      <MyWorkStation />

      <div className="text-xl flex gap-2">
        Checkout my previous website at:

        <Link href='https://v1.kazimubin.dev' target="_blank">
          <span className="font-bold hover:underline">v1.kazimubin.dev</span>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
