import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-semibold leading-tight transition-colors py-2",
  {
    variants: {
      variant: {
        default: "text-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        tertiary: "text-tertiary",
        destructive: "text-destructive",
        success: "text-success",
        warning: "text-warning",
        muted: "text-muted",
        accent: "text-accent",
      },
      gradient: {
        default: "",
        primary:
          "bg-gradient-to-tr from-primary to-white bg-clip-text text-transparent",
        secondary:
          "bg-gradient-to-tr from-secondary  to-foreground dark:to-white bg-clip-text text-transparent",
        tertiary:
          "bg-gradient-to-tr from-tertiary to-white bg-clip-text text-transparent",
        success:
          "bg-gradient-to-tr from-success to-white bg-clip-text text-transparent",
        destructive:
          "bg-gradient-to-tr from-destructive to-white bg-clip-text text-transparent",
        warning:
          "bg-gradient-to-tr from-warning to-white bg-clip-text text-transparent",
      },
      position: {
        default: "text-start",
        left: "text-center lg:text-start",
        center: "text-center",
        right: "text-center lg:text-end",
      },
      size: {
        h1: "text-[100px] font-[700] leading-[100%]",
        h2: "text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] font-[800] leading-[110%]",
        h3: "text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-[800] leading-[110%] text-opacity-90",
        h4: "text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-[600] lg:font-[800] leading-[110%] tracking-wide text-opacity-90",
        h5: "text-[16px] lg:text-[18px] xl:text-[20px] font-[500] leading-[110%] text-opacity-90",
        h6: "text-[20px] font-[500] leading-[110%] text-opacity-90",
      },
    },
    defaultVariants: {
      position: "default",
      variant: "default",
      size: "h1",
      gradient: "default",
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      variant,
      size,
      gradient,
      position,
      asChild = false,
      level = 1,
      ...props
    },
    ref
  ) => {
    const Comp: React.ElementType = asChild
      ? Slot
      : (`h${level}` as keyof JSX.IntrinsicElements);
    return (
      <Comp
        className={cn(
          headingVariants({ variant, size, gradient, position }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
