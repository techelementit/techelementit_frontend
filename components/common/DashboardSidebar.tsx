"use client";
import { ADMIN_NAVIGATION_LINKS } from "@/constants/navigation";
import { useAppContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { FC, useEffect } from "react";
import NavigationCollapsible from "../nav/NavigationCollapsible";
import { useSelector } from "react-redux";
import {
  LucideCheck,
  LucideCheckCircle2,
  LucideLogOut,
  LucideShieldCheck,
  LucideUser2,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import ButtonLoader from "./ButtonLoader";
import { useLogoutEveryoneMutation } from "@/redux/features/auth/authApi";
import PageLoader from "./PageLoader";
import { Span } from "next/dist/trace";

interface IDashboardSidebarProps {
  lang: string;
  mouseEnter: boolean;
  setMouseEnter: (mouseEnter: boolean) => void;
}

interface IAuthData {
  role: string;
  avatar: { url: string };
  name: { firstName: string; sureName: string };
  isVerified: boolean;
}

const DashboardSidebar: FC<IDashboardSidebarProps> = ({
  lang,
  mouseEnter,
  setMouseEnter,
}) => {
  const location = usePathname()?.split("/")?.pop() || "";
  const { sidebarOpen, load, setLoad } = useAppContext();
  const { role, avatar, name, isVerified } = useSelector(
    (state: any) => state.auth.authData
  ) as IAuthData;

  const [logoutEveryone, { error, isSuccess, isLoading }] =
    useLogoutEveryoneMutation();
  // LOGOUT HANDLER
  const handleLogout = async () => {
    await logoutEveryone({});
  };

  useEffect(() => {
    setLoad(false);
    if (isSuccess) {
      return redirect(`/${lang}`);
    }
    if (sidebarOpen && !mouseEnter) {
      setMouseEnter(false);
    }
  }, [isSuccess, sidebarOpen, mouseEnter]);

  // console.log(sidebarOpen, "side");
  // console.log(mouseEnter, "enter");

  return (
    <aside
      className={`${
        sidebarOpen
          ? "w-[260px] md:w-[300px] border-r-2"
          : "border-opacity-0 border-r-0 invisible opacity-0 !fixed left-0 top-0"
      } relative h-screen duration-200 ease-linear  transition-all flex flex-col z-20 border-opacity-60 overflow-hidden ${
        mouseEnter &&
        "after:absolute after:content-[''] after:w-full after:h-full brightness-95 opacity-50 blur-[0.8px]"
      }`}
    >
      <div className="w-full flex flex-col items-center justify-center my-8">
        {/* <Image
          src="/logo.png"
          alt="logo"
          width={258}
          height={256}
          className="w-8 lg:w-10 h-auto"
        /> */}
      </div>
      <div
        className={`w-full flex flex-col items-center justify-center duration-500 ease-in`}
      >
        {avatar?.url ? (
          <Link
            href="../"
            className="w-[40px] h-[40px] md:w-[50px]  md:h-[50px] lg:w-[70px] lg:h-[70px] mb-1 md:mb-2 border-2 relative rounded-full overflow-hidden"
          >
            <Image
              src={avatar?.url}
              alt={`${name?.firstName || ""} ${name?.sureName || ""}`}
              width={80}
              height={80}
              className="absolute -top-[10%]"
            />
          </Link>
        ) : (
          <Link
            href="../"
            className="w-[40px] h-[40px] md:w-[50px]  md:h-[50px] lg:w-[70px] lg:h-[70px] rounded-full mb-1 md:mb-2 border-2 flex items-center justify-center bg-accent/50"
          >
            <LucideUser2 className="w-8 h-8] opacity-80" />
          </Link>
        )}
        <h3 className="text-base md:text-lg font-poppins">
          {`${name?.firstName || "Not found"} ${name?.sureName || ""}`}
          {isVerified && (
            <LucideShieldCheck className="inline w-5 h-5 ml-1 pb-[2.5px] text-foreground/80" />
          )}
        </h3>
        <p className="text-xs px-1.5 rounded-md leading-4 bg-accent/80 mt-1 font-poppins">
          {role}
        </p>
      </div>
      {role === "admin" && (
        <div className="px-2 md:px-4 flex flex-col justify-between w-full h-full overflow-y-auto scroll-hidden my-4">
          <ul>
            {ADMIN_NAVIGATION_LINKS.length > 0 &&
              ADMIN_NAVIGATION_LINKS.map((menuItems: any) => (
                <NavigationCollapsible
                  path={`../../../../${lang}/${role}`}
                  location={location}
                  lang={lang}
                  key={menuItems.key}
                  menuItems={menuItems}
                  sublinkCount={true}
                />
              ))}
          </ul>
          <div className="h-8">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  size="sm"
                  className={`cursor-pointer ${
                    lang === "en" ? "font-poppins" : "font-anek"
                  } flex items-center justify-center w-full my-4 h-8`}
                >
                  <LucideLogOut className="dropdown-icon" />
                  <label className="cursor-pointer">
                    {lang === "en" ? "Logout" : "লগআউট"}
                  </label>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle
                    className={`${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {lang === "en"
                      ? "  Are you absolutely sure?"
                      : "আপনি কি পুরোপুরিভাবে নিশ্চিত ?"}
                  </AlertDialogTitle>
                  <AlertDialogDescription
                    className={`${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {lang === "en"
                      ? "Are you sure you want to log out? Logging out will end your current session."
                      : "আপনি কি নিশ্চিত যে আপনি লগ আউট করতে চান? লগ আউট করলে আপনার চলমান সেশন শেষ হয়ে যাবে।"}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    className={`btn-destructive-fill ${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {lang === "en" ? "Cancel" : "বাতিল করুন"}
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => handleLogout()}
                    className={`${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    {isLoading && <ButtonLoader />}
                    {lang === "en" ? "Confirm" : "নিশ্চিত করুন"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      )}
    </aside>
  );
};

export default DashboardSidebar;
