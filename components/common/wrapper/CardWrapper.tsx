import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardWrapperVariants = cva("transition-all w-full p-6 lg:p-[38px]", {
  variants: {
    variant: {
      default: "bg-foreground/5",
      primary: "bg-primary dark:bg-primary/5",
      secondary:
        "bg-secondary/20 dark:bg-secondary/5 hover:bg-secondary/30 dark:hover:bg-secondary/10 ",
      tertiary: "bg-tertiary dark:bg-tertiary/5",
      destructive: "bg-destructive dark:bg-destructive/5",
      success: "bg-success dark:bg-success/5",
      warning: "bg-warning dark:bg-warning/5",
      muted: "bg-muted dark:bg-muted/5",
      accent: "bg-accent dark:bg-accent/5",
    },
    gradient: {
      default: "",
      primary: "bg-gradient-to-tr from-primary to-white",
      secondary: "bg-gradient-to-tr from-secondary to-white",
      tertiary: "bg-gradient-to-tr from-tertiary to-white",
      success: "bg-gradient-to-tr from-success to-white",
      destructive: "bg-gradient-to-tr from-destructive to-white",
      warning: "bg-gradient-to-tr from-warning to-white",
    },
    blur: {
      none: "",
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
      xl: "backdrop-blur-xl",
    },
    rounded: {
      default: "rounded-none",
      xl: "rounded-xl",
      lg: "rounded-lg",
      md: "rounded-md",
      sm: "rounded-sm",
      xs: "rounded-xs",
    },
  },
  defaultVariants: {
    variant: "default",
    gradient: "default",
    blur: "none",
    rounded: "default",
  },
});
interface ICardWrapperProps extends VariantProps<typeof cardWrapperVariants> {
  children: React.ReactNode;
  className?: string;
}

const CardWrapper: React.FC<ICardWrapperProps> = ({
  children,
  className,
  variant,
  gradient,
  rounded,
  blur,
}) => {
  return (
    <div
      className={cn(
        cardWrapperVariants({ variant, blur, gradient, rounded }),
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
