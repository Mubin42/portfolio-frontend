import Timeline from '@/components/custom-components/Timeline';
import { NextPage } from 'next';

const experiences = [
  {
    role: 'Software Enginner',
    company: 'ZOLO Inc',
    year: 'June 2024 - Present',
    responsibility:
      "Design and implement new features for both frontend and backend, including API creation and database management for the company's main product. Collaborate with other team members to deliver high quality software.",
    techstacks: ['Next.js', 'Prisma', 'PostgreSQL'],
  },
  {
    role: 'Coding Instructor [Part-time]',
    company: 'happycoders.io',
    year: 'June 2022 - Present',
    responsibility:
      'Teaching Python and Scratch Programming, fostering a strong foundation in programming concepts to k2-k12 students.',
    techstacks: ['Scratch', 'Python', 'Java'],
  },
  {
    role: 'Software Enginner',
    company: 'thinkcrypt.io',
    year: 'June 2023 - May 2024',
    responsibility:
      'Developing and maintaining web application for internal and external use. Collaborating with other team members to deliver high quality software.',
    techstacks: ['Next.js', 'React.js', 'Express.js', 'MongoDB'],
  },
];

const ExperiencePage: NextPage = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl lg:text-6xl font-black">EXPERIENCES</h1>
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <Timeline
            key={index}
            role={exp.role}
            company={exp.company}
            year={exp.year}
            responsibility={exp.responsibility}
            techstacks={exp.techstacks}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
