import { FC } from 'react';

type Props = {};
const Footer: FC<Props> = ({}) => {
  return (
    <div className="fixed z-50 bottom-0 bg-main w-screen py-1 flex justify-center border-t-4">
      <p className="font-bold text-black">
        © 2024, Kazi Ehsanul Mubin. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
