import { FC } from 'react';
import PersonSvg from '../icons/PersonSvg';
import Bubble from './Bubble';
import { Button } from '../neobrutalism-ui/Button';
import useScramble from '@/hooks/useScramble';
import Link from 'next/link';

type Props = {};

const Hero: FC<Props> = ({}) => {
  const { scrambledText } = useScramble('Software Engineer');
  return (
    <div className="grid grid-cols-1 gap-y-4 lg:gap-x-16 lg:grid-cols-3">
      <div className="flex flex-col items-center lg:items-start gap-4 col-span-2 order-2 lg:order-1">
        <h1 className="font-black font-sans text-4xl lg:text-8xl ">
          Hi, I'm Mubin
        </h1>
        <p className="text-2xl lg:text-4xl">
          I'm a <span className="text-main">{scrambledText}</span>
        </p>
        <div className="flex gap-4">
          <Link href='/projects'>
            <Button>View Projects</Button>
          </Link>
         <Link href='/about'>
           <Button variant="neutral">Contact Me</Button>
         </Link>
        </div>
      </div>

      <div className="flex items-center justify-center relative order-1 lg:order-2">
        <div className="h-52 w-52">
          <PersonSvg />
          <div className="absolute -top-5 right-5">
            <Bubble />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
