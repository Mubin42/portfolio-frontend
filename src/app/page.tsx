"use client";

import Hero from "@/components/custom-components/Hero";
import { ExternalLinkIcon } from "lucide-react";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  const stacks = (
    <article className="space-y-6">
      <p className="font-cera font-bold">
        Here are a few technologies that I&apos;ve been working with recently:
      </p>
      <div className="flex justify-between md:justify-start">
        <ul className="space-y-2 md:mr-16">
          <li>&rarr; Javascript</li>
          <li>&rarr; Typescript</li>
          <li>→ Tailwind</li>
          <li>→ NodeJS</li>
        </ul>
        <ul className="space-y-2">
          <li>&rarr; ExpressJS</li>
          <li>&rarr; Docker</li>
          <li>&rarr; Git / Github</li>
          <li>&rarr; MongoDB</li>
        </ul>
      </div>
      <p className="font-cera font-bold mb-5">Here&apos;s my social links:</p>
      <div className="flex justify-between md:justify-start">
        <p className="flex md:w-32 items-center">
          <a
            href="https://www.facebook.com/iamrortiz/"
            target="_blank"
            className="flex items-center"
          >
            Facebook <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </a>
        </p>
        <p className="flex items-center">
          <a
            href="https://www.linkedin.com/in/ralphortiz/"
            target="_blank"
            className="flex md:w-32  items-center"
          >
            Linkedin <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </a>
        </p>
      </div>
    </article>
  );
  return (
    <div className="grid grid-cols-1 gap-4">
      <Hero />
      {stacks}
    </div>
  );
};

export default HomePage;
