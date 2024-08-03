import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideLogOut, LucideUserCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
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
import ButtonLoader from "../common/ButtonLoader";

interface INavigationProfileDropdownProps {
  lang: string;
  links: any;
  handleLogout: () => void;
  isLoading: boolean;
  path: string;
}

const NavigationProfileDropdown: FC<INavigationProfileDropdownProps> = ({
  lang,
  links,
  handleLogout,
  isLoading,
  path,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <LucideUserCircle2 className="h-[1.2rem] w-[1.2rem] scale-100 transition-all opacity-80 duration-500" />
          <span className="sr-only">Profile</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel
          className={`${
            lang === "en" ? "font-poppins" : "font-anek"
          } select-none`}
        >
          {lang === "en" ? "My Account" : "আমার একাউন্ট"}
        </DropdownMenuLabel>

        {links?.length > 0 &&
          links.map((link: any) => (
            <div key={link.key}>
              <DropdownMenuSeparator />
              {link?.sublinks?.length > 0 &&
                link?.sublinks.map((sublink: any) => (
                  <Link
                    href={`${path}/${sublink.href}`}
                    key={sublink.key}
                    className={`${
                      lang === "en" ? "font-poppins" : "font-anek"
                    }`}
                  >
                    <DropdownMenuItem className="cursor-pointer">
                      {React.createElement(sublink.icon, {
                        className:
                          "whitespace-nowrap mr-1 opacity-80 w-[18px] h-[18px] cursor-pointer",
                      })}
                      <label className="cursor-pointer">
                        {sublink.label[lang]}
                      </label>
                    </DropdownMenuItem>
                  </Link>
                ))}
            </div>
          ))}
        <DropdownMenuSeparator />

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              size="sm"
              className={`cursor-pointer ${
                lang === "en" ? "font-poppins" : "font-anek"
              } flex items-center w-full h-8 justify-start`}
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
                className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              >
                {lang === "en"
                  ? "  Are you absolutely sure?"
                  : "আপনি কি পুরোপুরিভাবে নিশ্চিত ?"}
              </AlertDialogTitle>
              <AlertDialogDescription
                className={`${lang === "en" ? "font-poppins" : "font-anek"}`}
              >
                {lang === "en"
                  ? "Are you sure you want to log out? Logging out will end your current session."
                  : "আপনি কি নিশ্চিত যে আপনি লগ আউট করতে চান? লগ আউট করলে আপনার চলমান সেশন শেষ হয়ে যাবে।"}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className={` ${lang === "en" ? "font-poppins" : "font-anek"}`}
              >
                {lang === "en" ? "Cancel" : "বাতিল করুন"}
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleLogout()}
                className={`btn-destructive-fill ${
                  lang === "en" ? "font-poppins" : "font-anek"
                }`}
              >
                {isLoading && <ButtonLoader />}
                {lang === "en" ? "Confirm" : "নিশ্চিত করুন"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigationProfileDropdown;
