import React, { ReactNode, FC } from "react";
import { cn } from "@/lib/utils";
import { Heading } from "../typography/Heading";
interface IFormWrapperProps {
  children: ReactNode;
  className?: string;
  headingText: string;
  subHeadingText?: string;
}
const FormWrapper: FC<IFormWrapperProps> = ({
  children,
  className,
  headingText,
  subHeadingText,
}) => {
  return (
    <section className={cn("w-[1440px mx-auto]", className)}>
      <Heading size="h3">{headingText}</Heading>
      {subHeadingText && <Heading size="h4">{subHeadingText}</Heading>}

      {children}
    </section>
  );
};

export default FormWrapper;
