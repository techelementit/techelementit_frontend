import React, { ReactNode, FC } from "react";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";
import { cn } from "@/lib/utils";
interface IPageWrapperProps {
  children: any;
  lang: string;
  className?: string;
}
const PageWrapper: FC<IPageWrapperProps> = ({ children, lang, className }) => {
  return (
    <section className={cn(fontSwitcher(lang), className)}>
      <section className="mt-[60px]">{children}</section>
    </section>
  );
};

export default PageWrapper;
