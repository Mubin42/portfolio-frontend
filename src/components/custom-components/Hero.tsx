import { FC } from "react";
import PersonSvg from "../icons/PersonSvg";
import Bubble from "./Bubble";
import { Button } from "../neobrutalism-ui/Button";
import useScramble from "@/hooks/useScramble";

type Props = {};

const Hero: FC<Props> = ({}) => {
  const { scrambledText } = useScramble("Mubin");
  return (
    <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
      <div className="flex flex-col items-center lg:items-start gap-4 col-span-2 order-2 lg:order-1">
        <h1 className="font-black font-sans text-4xl lg:text-8xl ">
          Hi, I'm {scrambledText}
        </h1>
        <p className="text-2xl lg:text-4xl">
          I'm a <span className="text-main">Software Engineer.</span>
        </p>
        <div className="flex gap-4">
          <Button>View Projects</Button>
          <Button variant="neutral">Contact Me</Button>
        </div>
      </div>
      <div className="col-span-1 order-1 lg:order-2 flex items-center justify-center relative">
        <PersonSvg className="max-w-52" />
        <div className="absolute -top-5 right-5">
          <Bubble />
        </div>
      </div>
    </div>
  );
};

export default Hero;
