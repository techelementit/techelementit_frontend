"use client";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import {
  EMPLOYEE_PROFILE_NAVIGATION,
  USER_PROFILE_NAVIGATION,
} from "@/constants/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { useLoadAuthDataQuery } from "@/redux/features/api/apiSlice";
import PageLoader from "./PageLoader";
import { useAppContext } from "@/context";
import ButtonLoader from "./ButtonLoader";
import NavigationProfileDropdown from "../nav/NavigationProfileDropdown";
import { useLogoutEveryoneMutation } from "@/redux/features/auth/authApi";
import Image from "next/image";
import Logo from "../../public/tech_element_bd_logo.svg";
import SectionWrapper from "./wrapper/SectionWrapper";
import { fontSwitcher } from "@/services/helper_functions/fontSwitcher";
import useCustomTranslator from "@/services/helper_functions/useCustomTranslator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LucideAlignLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface INavigationBarProps {
  lang: string;
}

const NavigationBar: FC<INavigationBarProps> = ({ lang }) => {
  const location = usePathname();

  // CONTEXT STATE
  const { load, setLoad } = useAppContext();
  // SHEET STATE
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  // SCROLL STATE
  const [scrollY, setScrollY] = useState(0);

  // REDUX STATE
  const { isLoading: authLoading } = useLoadAuthDataQuery({});
  // LOGOUT CONTROLLER
  const [logoutEveryone, { error, isSuccess, isLoading: logoutLoding }] =
    useLogoutEveryoneMutation();

  const authData = useSelector((state: any) => state.auth.authData);

  useEffect(() => {
    setLoad(false);
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, []);
  // INITIAL LOADING STATE CHECK
  // LOGOUT HANDLER
  const handleLogout = async () => {
    await logoutEveryone({});
  };

  if (load) {
    return <PageLoader />;
  }

  return (
    <nav
      className={`w-full py-3 lg:py-2 fixed left-0 top-0
     border-b border-transparent bg-popover dark:bg-secondary/5
         z-50 transition-all duration-200   ${
           scrollY > 0 && "backdrop-blur-lg border-b border-secondary/15"
         }`}
    >
      <SectionWrapper
        className={`flex flex-row justify-between items-center my-0 xl:my-0 ${fontSwitcher(
          lang
        )}`}
      >
        {/* LEFT SIDE NAVIGATION LINKS */}
        <ul className="hidden lg:flex 2xl:gap-x-10  xl:gap-x-8 lg:gap-x-6  items-center justify-start w-5/12 ">
          <li>
            <Link
              className={
                location?.includes("our_works")
                  ? "navigation_link_active"
                  : "navigation_link"
              }
              href={`../../../${lang}/our_works`}
            >
              {useCustomTranslator(lang, "Our Works", "আমাদের কার্যক্রম")}
            </Link>
          </li>
          <li>
            <Link
              className={
                location?.includes("services")
                  ? "navigation_link_active"
                  : "navigation_link"
              }
              href={`../../../${lang}/services`}
            >
              {useCustomTranslator(lang, "Services", "আমাদের সেবাসমূহ")}
            </Link>
          </li>
          <li>
            <Link
              className={
                location?.includes("case_study")
                  ? "navigation_link_active"
                  : "navigation_link"
              }
              href={`../../../${lang}/case_study`}
            >
              {useCustomTranslator(lang, "Case Study", "পদ্ধতিগত অধ্যয়ন ")}
            </Link>
          </li>
        </ul>

        {/* MOBILE NAVIGATION BAR */}
        <Sheet onOpenChange={setSheetOpen} open={sheetOpen}>
          <SheetTrigger className="block lg:hidden">
            <LucideAlignLeft />
          </SheetTrigger>
          <SheetContent
            className={cn(
              "bg-secondary/5 flex flex-col justify-evenly backdrop-blur-lg border-0",
              fontSwitcher(lang)
            )}
            side="left"
          >
            <ul className="mt-12 flex flex-col gap-y-2 ">
              <li className="w-full">
                <Link
                  onClick={() => setSheetOpen(!sheetOpen)}
                  className={cn(
                    "block",
                    location == "/" + lang
                      ? "border bg-secondary text-secondary-foreground text-center py-1 rounded-lg px-3 transition-all duration-300"
                      : "border text-center py-1 rounded-lg px-3"
                  )}
                  href={`../../../${lang}/`}
                >
                  {useCustomTranslator(lang, "Home", "হোম")}
                </Link>
              </li>
              <li className="w-full">
                <Link
                  onClick={() => setSheetOpen(!sheetOpen)}
                  className={cn(
                    "block",
                    location?.includes("our_works")
                      ? "border bg-secondary text-secondary-foreground text-center py-1 rounded-lg px-3 transition-all duration-300"
                      : "border text-center py-1 rounded-lg px-3"
                  )}
                  href={`../../../${lang}/our_works`}
                >
                  {useCustomTranslator(lang, "Our Works", "আমাদের কার্যক্রম")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setSheetOpen(!sheetOpen)}
                  className={cn(
                    "block",
                    location?.includes("services")
                      ? "border bg-secondary text-secondary-foreground text-center py-1 rounded-lg px-3 transition-all duration-300"
                      : "border text-center py-1 rounded-lg px-3"
                  )}
                  href={`../../../${lang}/services`}
                >
                  {useCustomTranslator(lang, "Services", "আমাদের সেবাসমূহ")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setSheetOpen(!sheetOpen)}
                  className={cn(
                    "block",
                    location?.includes("case_study")
                      ? "border bg-secondary text-secondary-foreground text-center py-1 rounded-lg px-3 transition-all duration-300"
                      : "border text-center py-1 rounded-lg px-3"
                  )}
                  href={`../../../${lang}/case_study`}
                >
                  {useCustomTranslator(lang, "Case Study", "পদ্ধতিগত অধ্যয়ন ")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setSheetOpen(!sheetOpen)}
                  className={cn(
                    "block",
                    location?.includes("about_us")
                      ? "border bg-secondary text-secondary-foreground text-center py-1 rounded-lg px-3 transition-all duration-300"
                      : "border text-center py-1 rounded-lg px-3"
                  )}
                  href={`../../../${lang}/about_us`}
                >
                  {useCustomTranslator(lang, "About Us", "আমাদের সম্পর্কে")}
                </Link>
              </li>
            </ul>
            <ul className="flex gap-x-4 mt-auto">
              <li>
                <LanguageSwitcher align="start" />
              </li>
              <li>
                <ThemeSwitcher align="start" lang={lang} />
              </li>
            </ul>
          </SheetContent>
        </Sheet>

        {/* LOGO */}
        <div className="w-[150px] lg:w-2/12 justify-center flex">
          <Link href={`../../../${lang}`}>
            <Image
              src={Logo}
              alt="tech element it logo"
              width={221}
              height={35}
            />
          </Link>
        </div>

        {/* LEFT SIDE NAVIGATION LINKS */}
        <div className="hidden lg:flex justify-end items-center w-5/12 ">
          <ul className="flex items-center 2xl:gap-x-10  xl:gap-x-8 lg:gap-x-6 h-12">
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <ThemeSwitcher lang={lang} />
            </li>
            <li>
              <Link
                className={
                  location?.includes("about_us")
                    ? "navigation_link_active"
                    : "navigation_link"
                }
                href={`../../../${lang}/about_us`}
              >
                {useCustomTranslator(lang, "About Us", "আমাদের সম্পর্কে")}
              </Link>
            </li>

            {authLoading ? (
              <Button
                className="flex justify-center items-center transition-all duration-300"
                shape="rounded"
                variant="ghost"
                disabled
              >
                <ButtonLoader />
              </Button>
            ) : authData?.email ? (
              ""
            ) : (
              <li>
                <Link href={`../../${lang}/auth/user_login`}>
                  <Button shape="rounded" variant="secondary">
                    {lang === "en" ? "Login" : "লগইন"}
                  </Button>
                </Link>
              </li>
            )}
            {((authData?.email && authData?.role === "admin") ||
              authData?.role === "teacher" ||
              authData?.role === "manager") && (
              <li className="mr-2">
                <NavigationProfileDropdown
                  handleLogout={handleLogout}
                  isLoading={logoutLoding}
                  path={`../../${lang}/${authData?.role}`}
                  links={EMPLOYEE_PROFILE_NAVIGATION}
                  lang={lang}
                />
              </li>
            )}
            {authData?.email && authData?.role === "user" && (
              <li className="mr-2">
                <NavigationProfileDropdown
                  handleLogout={handleLogout}
                  isLoading={logoutLoding}
                  path={`../../${lang}/${authData?.role}`}
                  links={USER_PROFILE_NAVIGATION}
                  lang={lang}
                />
              </li>
            )}
          </ul>
        </div>
      </SectionWrapper>
    </nav>
  );
};

export default NavigationBar;
