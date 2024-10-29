"use client";
import { FC } from "react";
import ModeToggle from "../custom-components/ModeToggle";
import navData from "./navData";
import Link from "next/link";
import { Button } from "../neobrutalism-ui/Button";
import DesktopNavItem from "./DesktopNavItem";

type Props = {};

const Navbar: FC<Props> = ({}) => {
  const desktopRight = (
    <div className="hidden md:block">
      <div className="flex-1 flex items-center gap-14 max-lg:hidden">
        {navData.map((nav, index) => {
          return <DesktopNavItem key={index} data={nav} />;
        })}
        <Button>
          <a href="/kazi_mubin_cv.pdf" download>
            <span>Resume</span>
          </a>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex w-full py-4 lg:py-6 bg-navbar px-4 lg:px-32 border-b-4 border-border justify-between items-center">
      <ModeToggle />
      {desktopRight}
    </div>
  );
};

export default Navbar;
