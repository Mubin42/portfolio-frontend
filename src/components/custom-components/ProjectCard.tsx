import { FC } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/neobrutalism-ui/Card';
import { Project } from '@/cms/projectsData';
import { SquareArrowOutUpRight } from 'lucide-react';
import { Badge } from '@/components/neobrutalism-ui/Badge';
import { Button } from '@/components/neobrutalism-ui/Button';
import Link from 'next/link';

type Props = {
  data: Project;
};

const ProjectCard: FC<Props> = ({ data }) => {
  return (
    <Card>
      <img
        src={data.image}
        alt={data.title}
        className="w-full sm:h-48 lg:h-64 object-cover"
      />
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {data.techStack.map((tech) => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Link href={data.link} target="_blank">
          <Button size="icon" variant="neutral">
            <SquareArrowOutUpRight size={16} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
