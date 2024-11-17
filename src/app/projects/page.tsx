import { NextPage } from 'next';
import projectsData from '@/cms/projectsData';
import ProjectCard from '@/components/custom-components/ProjectCard';

const ProjectPage: NextPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl lg:text-6xl font-black">PROJECTS</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projectsData?.doc?.map((project) => (
          <ProjectCard key={project.title} data={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
