'use client';
import { FC } from 'react';
import ModeToggle from '../custom-components/ModeToggle';
import { Button } from '../neobrutalism-ui/Button';
import DesktopNavItem from './DesktopNavItem';
import MobileNavbar from './MobileNavbar';
import navData from './navData';

type Props = {};

const Navbar: FC<Props> = ({}) => {
  const desktopRight = (
    <div className="hidden md:block">
      <div className="flex-1 flex items-center gap-14 max-lg:hidden">
        {navData.map((nav, index) => {
          return <DesktopNavItem key={index} data={nav} />;
        })}
        <a href="/kazi_mubin_cv.pdf" target="_blank" rel="noopener noreferrer">
          <Button>Resume</Button>
        </a>
      </div>
    </div>
  );

  return (
    <div className="fixed z-50 flex w-screen py-4 lg:py-6 bg-navbar px-4 lg:px-32 border-b-4 border-border justify-between items-center">
      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>
      {desktopRight}
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
