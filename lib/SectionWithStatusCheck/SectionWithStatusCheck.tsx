import CheckIcon from "@/icons/CheckIcon";
import XIcon from "@/icons/XIcon";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../utils";

const SectionWithStatusCheckStyles = cva(
  [
    "rounded-lg",
    "font-semibold",
    "text-sm",
    "flex",
    "justify-between",
    "items-center",
    "gap-x-4",
    "py-1",
    "pr-1",
    "pl-5",
    "rounded-tl-none",
    "shadow-lg",
  ],
  {
    variants: {
      variant: {
        clear: "text-green-600",
        black: "bg-black text-white",
        blue: "bg-[#00aebc] text-white",
      },
      size: {
        sm: "scale-75 shadow-md",
        md: "",
        lg: "scale-125",
      },
      /*       bgicon: {
        limegreen: "bg-[#d7fe05]",
        green: "bg-green-600",
      }, */
    },
    compoundVariants: [
      {
        variant: "clear",
        className: "text-green-600",
      },
      {
        variant: "black",
        className: "text-[#d7fe05]",
      },
      {
        variant: "blue",
        className: "text-white",
      },
    ],
    defaultVariants: {
      variant: "clear",
      size: "md",
    },
  }
);

type SectionWithStatusCheckProps = ComponentProps<"section"> &
  VariantProps<typeof SectionWithStatusCheckStyles> & {
    text: string;
    checked: boolean;
  };

export const SectionWithStatusCheck = forwardRef<
  HTMLButtonElement,
  SectionWithStatusCheckProps
>(({ variant, size, className, checked, text, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(SectionWithStatusCheckStyles({ variant, size, className }))}
      {...props}
    >
      {text}
      {checked ? (
        <div
          className={`p-1 rounded-md ${
            variant === "clear" ? "bg-green-600" : "bg-[#d7fe05]"
          }`}
        >
          <CheckIcon
            color={`${variant === "clear" ? "#fff" : "#000"}`}
            size={20}
          />
        </div>
      ) : (
        <div className={`p-1 rounded-md bg-red-500`}>
          <XIcon color={"#fff"} size={20} />
        </div>
      )}
    </section>
  );
});
