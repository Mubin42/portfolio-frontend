import { FC } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../neobrutalism-ui/Card';
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Badge } from '@/components/neobrutalism-ui/Badge';
import bentoLinkData from '@/cms/bentoLinkData';
import Link from 'next/link';
import { techStacks } from '@/cms/techStacks';

type Props = {};

const BentoGrid: FC<Props> = ({}) => {
  const stacks = (
    <Card>
      <CardHeader className="font-cera font-bold">
        <CardTitle className="text-4xl">My Tech Stacks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 flex-wrap">
          {techStacks.map((stack, index) => (
            <Badge key={index} variant="neutral" size="lg">
              {stack}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const linkSection = (
    <div className="grid grid-cols-2 gap-4">
      {bentoLinkData.map((item, index) => (
        <Card key={index} className="flex flex-col justify-center min-h-28">
          <CardHeader>{item.icon}</CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-extrabold">{item.title}</h1>
              <Link href={item.href} target="_blank">
                <p className="hover:underline cursor-pointer text-base font-normal">
                  @{item.username}
                </p>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {stacks}
      {linkSection}
    </div>
  );
};

export default BentoGrid;
