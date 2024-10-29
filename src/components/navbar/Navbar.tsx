"use client";
import { FC } from "react";
import ModeToggle from "../custom-components/ModeToggle";

type Props = {};

const Navbar: FC<Props> = ({}) => {
  return (
    <div className="flex w-full h-16 bg-navbar px-4 lg:px-32 justify-between items-center">
      <ModeToggle />
    </div>
  );
};

export default Navbar;
