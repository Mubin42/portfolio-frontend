"use client";

import Bubble from "@/components/custom-components/Bubble";
import Hero from "@/components/custom-components/Hero";
import PersonSvg from "@/components/icons/PersonSvg";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="grid grid-cols-1">
      <Hero />
      <div className="flex min-h-[1000px] bg-red-300">Hello</div>
    </div>
  );
};

export default HomePage;
