"use client";

import Bubble from "@/components/custom-components/Bubble";
import PersonSvg from "@/components/icons/PersonSvg";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  const hero = (
    <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
      <div className="flex flex-col gap-4 col-span-2 order-2 lg:order-1">
        <h1 className="font-black text-4xl lg:text-6xl ">Kazi Ehsanul Mubin</h1>
        <p className="text-xl">
          I am a software engineer based in Dhaka, Bangladesh. With over two
          years of experience in software development, I thrive on the
          challenges of crafting new and amazing things.
        </p>
      </div>
      <div className="col-span-1 order-1 lg:order-2 flex items-center justify-center relative">
        <PersonSvg className="max-w-52" />
        <div className="absolute -top-5 right-5">
          <Bubble />
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1">
      {hero}

      <div className="flex min-h-[1000px] bg-red-300">Hello</div>
    </div>
  );
};

export default HomePage;
