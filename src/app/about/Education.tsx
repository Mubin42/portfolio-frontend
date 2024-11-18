import { FC } from 'react';

const Education: FC = () => {
  const degree: string = `Bachelor of Science - BS, Computer Science and Engineering`;
  const university: string = `BRAC University, Dhaka`;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl lg:text-4xl font-extrabold">EDUCATION</h1>
      <div className="text-xl font-medium lg:text-2xl">
        <h2 className="font-bold">{degree}</h2>
        <p className="text-lg">{university}</p>
        <p className="text-base">2018 - 2022</p>
      </div>
    </div>
  );
};

export default Education;