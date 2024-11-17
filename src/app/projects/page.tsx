import {NextPage} from "next";
import {Card} from "@/components/neobrutalism-ui/Card";
import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/shadcn-ui/Card";

const ProjectPage: NextPage = () => {
  return <div className='space-y-4'>
    <h1 className="text-2xl lg:text-6xl font-black">PROJECTS</h1>
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          Hello World
        </CardContent>
        <CardFooter className="flex justify-between">
          Foot
        </CardFooter>
      </Card>
    </div>
  </div>;
};

export default ProjectPage;
