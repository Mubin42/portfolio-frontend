import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  data: NavData;
  className?: string;
};

const DesktopNavItem: FC<Props> = ({ data, className }) => {
  return (
    <Link href={data.href}>
      <div
        className={cn(
          'relative text-md font-bold transition duration-150 ease-in-out hover:-translate-y-1',
          className
        )}
      >
        <p className="relative after:absolute after:bottom-[-4px] after:left-0 after:h-[4px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
          {data.title}
        </p>
      </div>
    </Link>
  );
};

export default DesktopNavItem;
