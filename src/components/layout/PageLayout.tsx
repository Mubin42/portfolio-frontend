import { FC } from "react";
import Navbar from "../navbar/Navbar";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageLayout: FC<Props> = ({ children, className }) => {
  return (
    <div className="bg-background h-screen w-screen">
      <Navbar />
      <div className={cn("p-4 lg:p-32 max-w-screen-xl mx-auto", className)}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
