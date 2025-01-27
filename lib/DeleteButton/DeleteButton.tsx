import XIcon from "@/icons/XIcon";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../utils";

const deleteButtonStyles = cva(
  [
    "flex items-center justify-between",
    "rounded-full",
    "rounded-tl-none",
    "font-medium",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "bg-gradient-to-t from-[#831868] to-[#ea029f]",
    "active:from-[#74155c] active:to-[#d60193]",
    "text-white",
    "px-4 py-2",
  ],
  {
    variants: {
      size: {
        sm: "scale-75",
        md: "",
        lg: "scale-125",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type DeleteButtonProps = ComponentProps<"button"> &
  VariantProps<typeof deleteButtonStyles>;

export const DeleteButton = forwardRef<HTMLButtonElement, DeleteButtonProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(deleteButtonStyles({ size, className }))}
        {...props}
      >
        <div className="pr-2">
          <XIcon color={"#fff"} size={18} />
        </div>
        <span className="border-l-2 border-gray-200 pl-4">Eliminar</span>
      </button>
    );
  }
);
