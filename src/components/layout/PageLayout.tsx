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
        lerp: 0.1, // Linear interpolation (0-1). Smaller = smoother
        duration: 1.5, // Scroll duration in seconds
        smoothWheel: true, // Enable smooth scrolling for mouse wheel
        // smoothTouch: true, // Don't enable smooth scrolling for touch devices
        wheelMultiplier: 1, // Wheel speed multiplier
        infinite: false, // Don't enable infinite scroll
        orientation: "vertical", // Scroll orientation
        gestureOrientation: "vertical", // Gesture orientation
        touchMultiplier: 2, // Touch speed multiplier
        syncTouch: false, // Enable touch synchronization
      }}
    >
      <div className="bg-background h-screen w-screen">
        <Navbar />
        <div
          className={cn(
            "px-4 py-32 lg:px-32 lg:py-48 max-w-screen-xl mx-auto",
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
