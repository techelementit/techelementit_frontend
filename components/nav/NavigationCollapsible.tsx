"use client";
import { useAppContext } from "@/context";
import { digitConverter } from "@/utils/HelperFunctions";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface INavigationCollapsibleProps {
  menuItems: any;
  lang: string;
  location: string;
  sublinkCount?: boolean;
  path: string;
}

const NavigationCollapsible: FC<INavigationCollapsibleProps> = ({
  menuItems,
  lang,
  location,
  sublinkCount = false,
  path,
}) => {
  const { route, setRoute, sidebarOpen, setSidebarOpen } = useAppContext();

  return (
    <div
      className={`flex flex-col items-start ${
        lang === "bn" ? "font-anek" : "font-poppins"
      }`}
    >
      <button
        onClick={() => setRoute(route === menuItems.key ? " " : menuItems.key)}
        className={`border-2 capitalize w-full flex items-center justify-between rounded-md px-3 py-[6px]  hover:bg-accent text-sm font-medium transition-colors disabled:opacity-50 focus:outline-none disabled:pointer-events-none ${
          route === menuItems.key && "bg-accent"
        }`}
      >
        <span>{menuItems?.label[lang]}</span>
        <span className="inline-flex items-center">
          {menuItems?.sublinks &&
            menuItems?.sublinks?.length > 0 &&
            sublinkCount && (
              <span className="text-[10px] font-light px-[6px] bg-secondary/30 border-[1px] border-secondary rounded-full leading-tight">
                {digitConverter(menuItems?.sublinks?.length, lang)}
              </span>
            )}
          <FaAngleDown
            className={`transition-all duration-500 ease-in-out inline ml-2 ${
              route === menuItems.key && "rotate-180"
            }`}
          />
        </span>
      </button>
      {menuItems?.sublinks && menuItems.sublinks.length > 0 && (
        <ul
          className={`py-1  overflow-hidden transition-all duration-500 ease-in-out list-none w-full ${
            route === menuItems.key
              ? "max-h-[250px] visible overflow-y-auto scroll-hidden pl-3"
              : "invisible max-h-[0]"
          }`}
        >
          {menuItems.sublinks.map((link: any) => (
            <li
              key={link.key}
              onClick={() =>
                window.innerWidth < 767 && setSidebarOpen(!sidebarOpen)
              }
            >
              <Link
                href={`${path}/${link.href}`}
                className={`capitalize w-full max-w-full flex items-center gap-x-2 rounded-md bg-background px-3 py-[6px]  hover:bg-accent focus:bg-accent text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50  ${
                  location === link.href && "!bg-accent"
                }`}
              >
                {link.icon && (
                  <span>
                    {React.createElement(link.icon, {
                      className:
                        "whitespace-nowrap opacity-80 w-[18px] h-[18px]",
                    })}
                  </span>
                )}
                <label className="cursor-pointer">{link.label[lang]}</label>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavigationCollapsible;
