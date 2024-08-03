import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const blurEffectVariants = cva("hidden lg:block size-[300px] absolute -z-50", {
  variants: {
    variant: {
      default: "bg-foreground",
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
      destructive: "bg-destructive",
      success: "bg-success",
      warning: "bg-warning",
      muted: "bg-muted",
      accent: "bg-accent",
    },
    blur: {
      default: "!blur-[150px] lg:!blur-[200px] xl:!blur-[250px]",
      sm: "!blur-[300px] lg:!blur-[400px] xl:!blur-[500px]",
      md: "!blur-[450px] lg:!blur-[600px] xl:!blur-[750px]",
      lg: "!blur-[600px] lg:!blur-[800px] xl:!blur-[1000px]",
      xl: "!blur-[1100px] lg:!blur-[1300px] xl:!blur-[1500px]",
    },
    size: {
      default: "size-[100px] md:size-[150px] lg:size-[200px] xl:size-[250px]",
      sm: "size-[100px] md:size-[150px] lg:size-[200px] xl:size-[250px]",
      md: "size-[200px] md:size-[250px] lg:size-[300px] xl:size-[350px]",
      lg: "size-[200px] md:size-[300px] lg:size-[400px] xl:size-[500px]",
      xl: "size-[400px] md:size-[600px] lg:size-[800px] xl:size-[1000px]",
    },
    align: {
      default: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
      center: "left-1/2 -translate-x-1/2",
      left: "left-0 top-1/2 -translate-y-1/2",
      left_top: "left-0 top-0 -translate-y-1/2",
      left_bottom: "left-0 bottom-0 -translate-y-1/2",
      right: "right-0 top-1/2 -translate-y-1/2",
      right_top: "right-0 top-0 -translate-y-1/2",
      right_bottom: "right-0 bottom-0 -translate-y-1/2",
    },
    shape: {
      default: "rounded-none",
      rounded: "rounded-xl",
      circle: "rounded-full",
      square: "rounded-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    blur: "default",
    shape: "default",
  },
});
interface ICardWrapperProps extends VariantProps<typeof blurEffectVariants> {
  className?: string;
}

const BlurEffect: React.FC<ICardWrapperProps> = ({
  className,
  variant,
  size,
  shape,
  align,
  blur,
}) => {
  return (
    <div
      className={cn(
        blurEffectVariants({ variant, blur, size, align, shape }),
        className
      )}
    ></div>
  );
};

export default BlurEffect;
