import { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../neobrutalism-ui/Card";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

type Props = {};

const BentoGrid: FC<Props> = ({}) => {
  const links = [
    {
      title: "Github",
      href: "github.com",
      icon: <Github className="h-10 w-10" />,
      username: "johndoe",
    },
    {
      title: "Linkedin",
      href: "linkedin.com",
      icon: <Linkedin className="h-10 w-10" />,
      username: "johndoe",
    },
    {
      title: "Youtube",
      href: "youtube.com",
      icon: <Youtube className="h-10 w-10" />,
      username: "johndoe",
    },
    {
      title: "Twitter",
      href: "twitter.com",
      icon: <Twitter className="h-10 w-10" />,
      username: "johndoe",
    },
  ];

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
        {links.map((link, index) => (
          <Card key={index} className="flex flex-col justify-center min-h-28">
            <CardHeader>{link.icon}</CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-extrabold">{link.title}</h1>
                <p className="hover:underline cursor-pointer text-base font-normal">
                  @{link.username}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
