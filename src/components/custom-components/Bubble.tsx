import React, { useState, useEffect, FC } from "react";

const intros = [
  "Software Engineer",
  "Graphic Designer",
  "Web Developer",
  "Problem Solver",
  "Creative Thinker",
  "Coffee Addict",
  "Tech Geek",
];

const Bubble: FC = () => {
  const [randomText, setRandomText] = useState("");

  useEffect(() => {
    setRandomText(getRandomIntro());
  }, []);

  const getRandomIntro = () => {
    return intros[Math.floor(Math.random() * intros.length)];
  };

  const handleMouseEnter = () => {
    setRandomText(getRandomIntro());
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="bg-background cursor-pointer border-2 rounded-base border-primary p-2 w-[150px] transform duration-75 ease-in hover:scale-125 hover:bg-primary hover:text-secondary hover:outline-secondary"
    >
      <p className="text-center font-cera font-bold text-sm">{randomText}</p>
    </div>
  );
};

export default Bubble;
