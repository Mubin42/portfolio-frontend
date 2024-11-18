import { FC } from 'react';

const MyWorkStation: FC = () => {


  return (
    <div className="space-y-4">
      <h1 className="text-2xl lg:text-4xl font-extrabold">MY WORKSTATION</h1>
      <ul className='pl-6 list-disc text-xl'>
        <li>
          <h2>AMD Ryzen 7 5700G • RTX 3060ti • 32 Gigs RAM</h2>
        </li>
        <li>
          <h2>MacBook Air (M3 Chip) 13-inch</h2>
        </li>
        <li>
          <h2>Rider CE • WebStorm CE • Visual Studio Code</h2>
        </li>
        <li>
          <h2>GitHub Copilot • ChatGPT</h2>
        </li>
      </ul>
    </div>
  );
};

export default MyWorkStation;