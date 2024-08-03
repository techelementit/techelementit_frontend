import {
  LucideAlertTriangle,
  LucideCheckCircle,
  LucideMailWarning,
  LucideMessageSquare,
  LucideX,
} from "lucide-react";
import { useParams } from "next/navigation";
import React, { FC, useState } from "react";

interface IMessageProps {
  message: string;
  variant?: "destructive" | "warning" | "default" | "success";
}

const Message: FC<IMessageProps> = ({ message, variant = "default" }) => {
  const { lang } = useParams() as any;
  const [show, setShow] = useState(true);
  return (
    <div
      className={`${
        show || "hidden"
      } w-10/12 md:max-w-[400px] mx-auto px-4 pt-2 pb-2.5 rounded-md flex items-center justify-between group
      ${
        variant === "destructive" &&
        "bg-destructive text-destructive-foreground"
      }
      ${variant === "success" && "bg-accent text-accent-foreground"}
      ${variant === "warning" && "bg-warning text-warning-foreground"}
      ${variant === "default" && "bg-primary text-primary-foreground"}
      `}
    >
      <p
        className={`inline-flex items-center gap-x-2 mt-[3px] select-none   ${
          lang === "en" ? "font-poppins" : "font-anek"
        }`}
      >
        {variant === "warning" && <LucideMailWarning className="inline" />}
        {variant === "success" && <LucideCheckCircle className="inline" />}
        {variant === "destructive" && (
          <LucideAlertTriangle className="inline-block w-6 h-6 !mt-[-4px]" />
        )}
        {variant === "default" && <LucideMessageSquare className="inline" />}

        <span className="inline regular-14">{message}</span>
      </p>
      <button
        type="button"
        onClick={() => setShow(false)}
        className={`w-5 h-5 p-0.5 rounded-md border-2 flex items-center justify-center invisible group-hover:visible duration-300 transition-all delay-75 ease-linear ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
        ${
          variant === "destructive" &&
          "border-destructive-foreground/80 hover:destructive-foreground/10 "
        }
      ${
        variant === "success" &&
        "border-accent-foreground/80 hover:accent-foreground/10 "
      }
      ${
        variant === "warning" &&
        "border-warning-foreground/80 hover:warning-foreground/10"
      }
      ${
        variant === "default" &&
        "border-primary-foreground/80 hover:primary-foreground/10"
      }
        
        `}
      >
        <LucideX className="" />
      </button>
    </div>
  );
};

export default Message;
