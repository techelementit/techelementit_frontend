import { useParams } from "next/navigation";
import React, { FC } from "react";

interface IDataLoaderProps {}

const DataLoader: FC<IDataLoaderProps> = () => {
  const { lang } = useParams() as any;

  return (
    <div className="duration-500 transition-opacity w-full h-screen bg-accent/20  flex items-center justify-center z-[99999999] left-0 top-0 backdrop-blur-[1px] delay-150 ease-linear flex-col fixed">
      <span className="w-6 h-6 md:w-12 md:h-12 rounded-full animate-spin border-[3px] border-dotted border-foreground/50 border-t-transparent"></span>
      <p
        className={`font-medium text-foreground/40 mt-2 ${
          lang === "en" ? "font-poppins" : "font-anek"
        }`}
      >
        {lang === "en" ? "Data is loading..." : "তথ্য লোড হচ্ছে..."}
      </p>
    </div>
  );
};

export default DataLoader;
