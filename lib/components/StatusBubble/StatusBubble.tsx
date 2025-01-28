import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { cn } from "../../utils";

const statusBubbleStyles = cva(
  [
    "relative",
    "text-white",
    "font-medium",
    "rounded-lg",
    "px-4",
    "py-2",
    "inline-block",
  ],
  {
    variants: {
      size: {
        xs: "px-3 py-2 text-xs",
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "px-5 py-3 text-base",
        xl: "px-6 py-3.5 text-base",
      },
      color: {
        black: "bg-black",
        green: "bg-[#53d232]",
      },
    },
    defaultVariants: {
      size: "md",
      color: "black",
    },
  }
);

type StatusBubbleProps = ComponentProps<"div"> &
  VariantProps<typeof statusBubbleStyles> & {
    text?: string;
    size?: Size;
    color?: Color;
  };

export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type Color = "black" | "green";

export const StatusBubble: React.FC<StatusBubbleProps> = ({
  size,
  text,
  color,
  className,
}) => {
  return (
    <div
      className={cn(
        statusBubbleStyles({
          size,
          color,
          className,
        })
      )}
    >
      <span>{text}</span>
    </div>
  );
};
