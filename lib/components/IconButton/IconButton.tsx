import ChatIcon from "@/icons/ChatIcon";
import SaveIcon from "@/icons/SaveIcon";
import UploadIcon from "@/icons/UploadIcon";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

const iconMap = {
  chat: ChatIcon,
  save: SaveIcon,
  upload: UploadIcon,
};
const iconButtonStyles = cva(
  [
    "w-full",
    "rounded-xl",
    "rounded-tl-none",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "bg-black",
    "p-2",
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

type IconButtonProps = ComponentProps<"button"> &
  VariantProps<typeof iconButtonStyles> & {
    iconColor: "white" | "green";
    iconType: "chat" | "save" | "upload";
  };

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size, className, iconColor, iconType = "chat", ...props }, ref) => {
    const Icon = iconMap[iconType];

    return (
      <button
        ref={ref}
        className={cn(iconButtonStyles({ size, className }))}
        {...props}
      >
        <Icon size={18} color={iconColor === "white" ? "#FFF" : "#D7FE05"} />
      </button>
    );
  }
);
