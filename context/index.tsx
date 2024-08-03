"use client";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "@/utils/StoreProvider";
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { SessionProvider } from "next-auth/react";

interface IAppContext {
  route: string;
  setRoute: (route: string) => void;
  load: boolean;
  setLoad: (load: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}
const AppContext = createContext<IAppContext | undefined>(undefined);

interface IAppWrapperProps {
  children: ReactNode;
}
export const AppWrapper: FC<IAppWrapperProps> = ({ children }) => {
  // DASHBOAR SIDEBAR STATE
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() => {
    const storeValue =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("AHPASidebar")
        : null;
    return storeValue ? JSON.parse(storeValue) : false;
  });

  // ROUTE STATE
  const [route, setRoute] = useState<string>("");
  // LOAD STATE
  const [load, setLoad] = useState(true);

  // RETRIVE PREVIOUS ROUTE AFTER LOADING PAGE
  useEffect(() => {
    if (route === "") {
      const active: string = localStorage.getItem("AHPARoute") || "";
      setRoute(active);
    } else {
      localStorage.setItem("AHPARoute", route);
    }
    localStorage.setItem("AHPASidebar", JSON.stringify(sidebarOpen));
  }, [route, sidebarOpen]);

  const state = {
    sidebarOpen,
    setSidebarOpen,
    load,
    setLoad,
    route,
    setRoute,
  };

  return (
    <SessionProvider>
      <AppContext.Provider value={state}>
        <StoreProvider>{children}</StoreProvider>
        <Toaster />
      </AppContext.Provider>
    </SessionProvider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
