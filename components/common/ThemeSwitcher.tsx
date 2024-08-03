"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LucideMoon,
  LucideSunMedium,
  LucideWrench,
  MoonIcon,
  SunIcon,
} from "lucide-react";

interface IThemeSwitcherProps {
  lang: string;
  align?: "end" | "start" | "center";
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({
  lang,
  align = "end",
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 opacity-80 duration-500" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 opacity-80 duration-500" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className="flex flex-col gap-[2px] !py-2"
      >
        <DropdownMenuItem
          className={`flex item-center gap-x-2 cursor-pointer h-8 ${
            theme === "light" && "bg-accent"
          }`}
          onClick={() => setTheme("light")}
        >
          <LucideSunMedium className="dropdown-icon" />
          <label
            className={`leading-4 cursor-pointer ${
              lang === "bn" ? "font-anek" : "font-poppins"
            }`}
          >
            {lang === "bn" ? "লাইট মোড" : "Light Mode"}
          </label>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`flex item-center gap-x-2 cursor-pointer h-8 ${
            theme === "dark" && "bg-accent"
          }`}
          onClick={() => setTheme("dark")}
        >
          <LucideMoon className="dropdown-icon" />
          <label
            className={`leading-4 cursor-pointer ${
              lang === "bn" ? "font-anek" : "font-poppins"
            }`}
          >
            {lang === "bn" ? "ডার্ক মোড" : "Dark Mode"}
          </label>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`flex item-center gap-x-2 cursor-pointer h-8 ${
            theme === "system" && "bg-accent"
          }`}
          onClick={() => setTheme("system")}
        >
          <LucideWrench className="dropdown-icon" />
          <label
            className={`leading-4 cursor-pointer ${
              lang === "bn" ? "font-anek" : "font-poppins"
            }`}
          >
            {lang === "bn" ? "সিস্টেম" : "System"}
          </label>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
