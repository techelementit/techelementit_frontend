import React, { FC, ReactNode } from "react";
import DashboardNavigationBar from "./DashboardNavigationBar";

interface IDashboardContentFieldProps {
  children: ReactNode;
  lang: string;
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}

const DashboardContentField: FC<IDashboardContentFieldProps> = ({
  children,
  lang,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <main className="w-screen md:w-full overflow-y-auto overscroll-y-contain mx-auto scroll-hidden h-full">
      <DashboardNavigationBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        lang={lang}
      />
      <section
        className={`scroll-hidden overscroll-y-contain pt-[41px] md:pt-[45px] mx-2 md:mx-8 h-full duration-100 transition-all ease-linear ${
          sidebarOpen && "blur-[2px] md:blur-none"
        }`}
      >
        {children}
      </section>
    </main>
  );
};

export default DashboardContentField;
