"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import { useAppContext } from "@/context";
import DashboardContentField from "./DashboardContentField";
import PageLoader from "./PageLoader";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLoadAuthDataQuery } from "@/redux/features/api/apiSlice";

interface IDashboardLayoutProps {
  children: ReactNode;
  params: { lang: string };
}

const DashboardLayout: FC<IDashboardLayoutProps> = ({
  children,
  params: { lang },
}) => {
  const { sidebarOpen, setSidebarOpen, load, setLoad } = useAppContext();
  const [mouseEnter, setMouseEnter] = useState(false);
  const { isLoading } = useLoadAuthDataQuery({});

  useEffect(() => {
    setLoad(false);
  }, []);

  if (load || isLoading) {
    return <PageLoader />;
  }

  return (
    <section
      className={`w-full h-screen flex overflow-hidden ${
        lang === "en" ? "font-poppins" : "font-anek"
      }`}
    >
      <DashboardSidebar
        setMouseEnter={setMouseEnter}
        mouseEnter={mouseEnter}
        lang={lang}
      />
      <section
        className={` ${
          sidebarOpen
            ? "w-[calc(100%-260px)] md:w-[calc(100%-300px)] justify-start"
            : "w-full max-w-full !fixed right-0 top-0 z-50"
        } h-screen duration-200 ease-linear transition-all flex flex-col relative overflow-visible bg-background`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              onPointerDown={(event: any) =>
                event.pointerType === "touch" && setMouseEnter(false)
              }
              onMouseEnter={() => setMouseEnter(true)}
              onMouseLeave={() => setMouseEnter(false)}
              className="hidden md:block absolute bottom-1/2 left-3 -translate-x-1/2 translate-y-1/2 border-2 px-[4px] py-4 rounded-full hover:opacity-50 transition-all duration-200 ease-linear border-transparent hover:border-primary/50"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="block w-1 h-16 rounded-full bg-opacity-60 backdrop-blur-md bg-primary/50 z-50"></span>
            </TooltipTrigger>
            <TooltipContent className="absolute top-1/2 translate-y-[125%] left-[15px] w-[120px] border-2">
              <p className={`text-center !px-0 block text-xs`}>
                {sidebarOpen
                  ? `${lang === "en" ? "Close Sidebar" : "বন্ধ করুন"}`
                  : `${lang === "en" ? "Open Sidebar" : "সাইডবার খুলুন"}`}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DashboardContentField
          lang={lang}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        >
          {children}
        </DashboardContentField>
      </section>
    </section>
  );
};

export default DashboardLayout;
