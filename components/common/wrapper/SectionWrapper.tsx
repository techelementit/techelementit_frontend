import React, { ReactNode, FC } from "react";
import { cn } from "@/lib/utils";
interface ISectionWrapperProps {
  children: ReactNode;
  className?: string;
}
const SectionWrapper: FC<ISectionWrapperProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "2xl:w-[1300px] xl:w-[1200px] lg:w-[900px] w-11/12 flex flex-col items-center  mx-auto my-[75px] xl:my-[150px]",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
