"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../i18n-config";
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
import { LucideGlobe2, LucideLanguages } from "lucide-react";

interface ILanguageSwitcherProps {
  align?: "end" | "start" | "center";
}

const LanguageSwitcher: React.FC<ILanguageSwitcherProps> = ({
  align = "end",
}) => {
  const pathName: any = usePathname();
  // const { setLang } = useAppContext();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <LucideGlobe2 className="h-[1.2rem] w-[1.2rem] opacity-80 duration-500" />
          <span className="sr-only">Language Switcher</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {i18n.locales.map((locale: any) => (
          <Link key={locale} href={redirectedPathName(locale)}>
            <DropdownMenuItem className="flex item-center gap-x-2   cursor-pointer px-0 my-1 h-8">
              {locale === "en" && (
                <label
                  className={`cursor-pointer font-poppins flex px-2 items-center gap-x-2 h-8 ${
                    pathName?.split("/").length > 0 &&
                    pathName?.split("/")[1] === "en" &&
                    "bg-accent w-full   rounded-sm"
                  }`}
                >
                  <LucideLanguages className="dropdown-icon" />
                  English
                </label>
              )}
              {locale === "bn" && (
                <label
                  className={`cursor-pointer px-2 font-anek flex items-center gap-x-2 h-8 ${
                    pathName?.split("/").length > 0 &&
                    pathName?.split("/")[1] === "bn" &&
                    "bg-accent w-full rounded-sm"
                  }`}
                >
                  <LucideLanguages className="dropdown-icon" />
                  বাংলা
                </label>
              )}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
