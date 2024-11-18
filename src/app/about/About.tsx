import { FC } from 'react';

const About: FC = () => {
  const description = `Hi, I’m Mubin! I’m a Software Engineer with a couple of years of experience, but beyond the code, I’m just a curious mind who loves exploring physics, history, and philosophy. In my free time, I’m either reading, watching documentaries, gaming, or cracking lame jokes to make people smile. I enjoy meeting new people, learning new things, and appreciating life’s little joys.`;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl lg:text-6xl font-black">ABOUT</h1>
      <div className="space-y-4 text-xl font-medium lg:text-2xl">
        <p>{description}</p>
        <p>
          You can reach me at:{' '}
          <span className="font-bold">kazimubin.46@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default About;