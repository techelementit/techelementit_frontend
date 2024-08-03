import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const paragraphVariants = cva(
  "w-full text-base leading-normal text-opacity-80",
  {
    variants: {
      variant: {
        default: "text-foreground/90",
        primary: "text-primary",
        secondary: "text-secondary",
        tertiary: "text-tertiary",
        destructive: "text-destructive",
        success: "text-destructive",
        warning: "text-warning",
        muted: "text-muted",
        accent: "text-accent",
        link: "text-link underline-offset-4 hover:underline",
      },
      size: {
        default: "text-[20px] font-[400] leading-[156%]",
        lg: "text-[22px] font-[400] leading-[110%]",
        md: "text-[18px] font-[400] leading-[156%] tracking-wide",
        sm: "text-[16px] font-[400] leading-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  asChild?: boolean;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={cn(paragraphVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
