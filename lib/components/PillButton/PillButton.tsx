import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

const pillButtonStyles = cva(
  [
    "rounded-full",
    "font-semibold",
    "disabled:cursor-not-allowed",
    "px-8",
    "py-1",
    "transform",
    "duration-75",
  ],
  {
    variants: {
      variant: {
        greenblue: "bg-[#00aebc] text-white active:bg-[#159ea8]",
        white:
          "bg-gradient-to-t from-gray-300 to-white shadow-md active:from-gray-400 active:to-gray-50",
      },
      size: {
        sm: "scale-75",
        md: "",
        lg: "scale-125",
      },
    },
    defaultVariants: {
      variant: "white",
      size: "md",
    },
  }
);

type PillButtonProps = ComponentProps<"button"> &
  VariantProps<typeof pillButtonStyles>;

export const PillButton = forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(pillButtonStyles({ variant, size, className }))}
        {...props}
      />
    );
  }
);
