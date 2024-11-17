'use client';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  const description = `I am a Software Engineer with nearly two years of professional software development experience. I have a strong foundation in full-stack web development, with a focus on backend technologies. I am passionate about building high-quality software that solves real-world problems. I am a quick learner and a team player who enjoys collaborating with others to deliver high-quality software.`;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl lg:text-6xl font-black">ABOUT</h1>
      <div className="space-y-10 text-xl font-medium lg:text-2xl">
        <p>{description}</p>
        <p>
          You can reach me at:{' '}
          <span className="font-bold">kazimubin.46@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
