import Timeline from "@/components/custom-components/Timeline";
import { NextPage } from "next";

const experiences = [
  {
    role: "Software Enginner",
    company: "PT. Karya Anak Bangsa",
    year: "September 2021 - Present",
    responsibility:
      "Developing and maintaining web application for internal and external use. Collaborating with other team members to deliver high quality software.",
    techstacks: ["Next.js", "React.js"],
  },
  {
    role: "Software Enginner",
    company: "PT. Karya Anak Bangsa",
    year: "September 2021 - Present",
    responsibility:
      "Developing and maintaining web application for internal and external use. Collaborating with other team members to deliver high quality software.",
    techstacks: ["Next.js", "React.js"],
  },
  {
    role: "Software Enginner",
    company: "PT. Karya Anak Bangsa",
    year: "September 2021 - Present",
    responsibility:
      "Developing and maintaining web application for internal and external use. Collaborating with other team members to deliver high quality software.",
    techstacks: ["Next.js", "React.js"],
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
