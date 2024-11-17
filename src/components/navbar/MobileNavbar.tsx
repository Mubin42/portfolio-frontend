import { FC } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../neobrutalism-ui/Sheet';
import { Button } from '../neobrutalism-ui/Button';
import { FileDown, FileText, Menu } from 'lucide-react';
import navData from './navData';
import Link from 'next/link';

type Props = {};

const MobileNavbar: FC<Props> = ({}) => {
  const header = (
    <SheetHeader className="border-b-4 pb-4">
      <SheetTitle className="text-2xl">Navigate</SheetTitle>
    </SheetHeader>
  );

  const body = (
    <div className="grid gap-4 py-4">
      {navData.map((nav, index) => (
        <SheetClose asChild key={index}>
          <Link href={nav.href}>
            <div className="text-xl font-semibold">{nav.title}</div>
          </Link>
        </SheetClose>
      ))}

      <a
        href="/kazi_mubin_cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex text-xl gap-2 font-semibold items-center"
      >
        <span>Resume</span> <FileDown className="size-6" />
      </a>
    </div>
  );

  const footer = (
    <SheetFooter className="absolute bottom-0 left-0 right-0 pb-6">
      <div className="w-full px-6">
        <div className="w-full h-[4px] bg-black mb-4"></div>
        <div className="text-sm">© 2024, Kazi Ehsanul Mubin.</div>
        <div className="text-xs">All rights reserved.</div>
      </div>
    </SheetFooter>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex lg:hidden" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {header}
        {body}
        {footer}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
