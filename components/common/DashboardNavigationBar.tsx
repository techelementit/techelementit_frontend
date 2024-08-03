"use client";
import React, { FC, useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { HiMenuAlt1 } from "react-icons/hi";

interface IDashboardNavigationBarProps {
  lang: string;
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}

const DashboardNavigationBar: FC<IDashboardNavigationBarProps> = ({
  lang,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <nav
      className={`w-screen md:w-full overflow-hidden py-1 md:py-1.5 border-b-[1px] absolute left-0 top-0 z-50 transition-all duration-500 bg-background/10 backdrop-blur-sm !border-transparent px-2 md:px-8 `}
    >
      <div className="flexBetween">
        <ul className="flex items-center">
          <li>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="inline-flex md:hidden  items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground p-[6px]"
            >
              <HiMenuAlt1 className="h-[1.2rem] w-[1.2rem] text-lg opacity-80" />
            </button>
          </li>
        </ul>

        <ul className="flex items-center">
          <li>
            <LanguageSwitcher />
          </li>
          <li className="ml-2">
            <ThemeSwitcher lang={lang} />
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavigationBar;
