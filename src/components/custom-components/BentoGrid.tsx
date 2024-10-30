import { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../neobrutalism-ui/Card";
import { Github, Linkedin, Youtube } from "lucide-react";

type Props = {};

const BentoGrid: FC<Props> = ({}) => {
  const stacks = (
    <Card>
      <CardHeader className="font-cera font-bold">
        <CardTitle>My Tech Stacks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between md:justify-start pl-4">
          <ul className="space-y-2 md:mr-16">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Tailwind</li>
            <li>NodeJS</li>
          </ul>
          <ul className="space-y-2">
            <li>ExpressJS</li>
            <li>Docker</li>
            <li>Git / Github</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {stacks}
      <div className="grid grid-cols-2 gap-4">
        <Card className="flex flex-1 items-center justify-center bg-[#a388ee] min-h-28">
          <Github className="h-8 w-8" />
        </Card>
        <Card className="flex flex-1 items-center justify-center bg-[#88aaee] min-h-28">
          <Linkedin className="h-8 w-8" />
        </Card>
        <Card className="flex flex-1 items-center justify-center bg-[#A3E636] min-h-28">
          <Github className="h-8 w-8" />
        </Card>
        <Card className="flex flex-1 items-center justify-center bg-[#ff6b6b] min-h-28">
          <Youtube className="h-8 w-8" />
        </Card>
      </div>
    </div>
  );
};

export default BentoGrid;
