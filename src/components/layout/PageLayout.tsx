"use client";
import { FC } from "react";
import Navbar from "../navbar/Navbar";
import { cn } from "@/lib/utils";
import Footer from "../custom-components/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageLayout: FC<Props> = ({ children, className }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        infinite: false,
        orientation: "vertical",
        gestureOrientation: "vertical",
        touchMultiplier: 2,
        syncTouch: false,
      }}
    >
      <div className="relative min-h-screen w-screen">
        {/* Background div */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]"></div>

        {/* Content */}
        <Navbar />
        <div
          className={cn(
            "px-4 py-28 lg:px-32 lg:py-28 max-w-screen-xl mx-auto",
            className,
          )}
        >
          {children}
        </div>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default PageLayout;
