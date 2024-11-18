import Timeline from '@/components/custom-components/Timeline';
import { NextPage } from 'next';
import { experiencesData } from '@/cms/experiencesData';

const ExperiencePage: NextPage = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl lg:text-6xl font-black">EXPERIENCES</h1>
      <div className="flex flex-col">
        {experiencesData.map((exp, index) => (
          <Timeline
            key={index}
            role={exp.role}
            company={exp.company}
            year={exp.year}
            responsibility={exp.responsibility}
            techstacks={exp.techStacks}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
