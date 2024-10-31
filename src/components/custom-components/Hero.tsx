import { FC } from "react";
import PersonSvg from "../icons/PersonSvg";
import Bubble from "./Bubble";
import { Button } from "../neobrutalism-ui/Button";
import useScramble from "@/hooks/useScramble";
import { Card, CardContent } from "../neobrutalism-ui/Card";

type Props = {};

const Hero: FC<Props> = ({}) => {
  const { scrambledText } = useScramble("Software Enginner");
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
          <Button>View Projects</Button>
          <Button variant="neutral">Contact Me</Button>
        </div>
      </div>

      <div className="flex items-center justify-center relative order-1 lg:order-2">
        <PersonSvg className="max-w-52" />
        <div className="absolute -top-5 right-5">
          <Bubble />
        </div>
      </div>
    </div>
  );
};

export default Hero;
