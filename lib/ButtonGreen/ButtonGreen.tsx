import { cn } from "../utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-full",
    "rounded-tl-none",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "bg-gradient-to-tr",
    "from-green-700",
    "to-green-500",
    "text-white",
    "active:from-green-800",
    "active:to-green-600",
  ],
  {
    variants: {
      size: {
        sm: "px-4 py-1 text-sm",
        md: "px-4 py-1 text-sm font-semibold",
        lg: "px-6 py-3 text-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const ButtonGreen = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ size, className }))}
        {...props}
      />
    );
  }
);
