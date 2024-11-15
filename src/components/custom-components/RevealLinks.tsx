import React from "react";
import {motion} from "framer-motion";

const linksData = [
  {
    title: "GitHub",
    href: "https://github.com/Mubin42",

  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/kazi-mubin/"
  }, {
    title: "Facebook",
    href: "https://www.facebook.com/mubin.kazi.5"
  }
];

export const RevealLinks = () => {
  return (
    <section className="grid gap-2 sm:py-10 lg:py-24 text-secondaryBlack dark:text-main">
      {
        linksData.map((link, index) => (
          <FlipLink key={index} href={link.href}>
            {link.title}
          </FlipLink>
        ))
      }
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({children, href}: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-5xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};