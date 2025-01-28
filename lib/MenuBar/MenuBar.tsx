import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../utils";

const menuBarStyles = cva(
  [
    "flex",
    "w-full",
    "items-center",
    "bg-[#151515]",
    "p-8",
    "rounded-3xl",
    "rounded-tr-none",
  ],
  {
    variants: {},
    defaultVariants: {},
  }
);

const menuButtonStyles = cva(
  [
    "flex",
    "items-center",
    "px-8",
    "py-2",
    "bg-[#2a2a2a]",
    "text-gray-300",
    "rounded-xl",
    "rounded-tr-none",
    "hover:bg-[#727272]",
    "hover:text-white",
    "transition-colors",
    "focus:ring-2",
    "focus:ring-yellow-400",
  ],
  {
    variants: {},
    defaultVariants: {},
  }
);

const separatorStyles = cva(["w-px", "h-6", "bg-gray-600", "mx-2"]);

type MenuBarItem = {
  label: string;
  icon?: JSX.Element;
  onClick?: () => void;
};

type MenuBarProps = {
  items: MenuBarItem[];
} & ComponentProps<"div">;

export const MenuBar = forwardRef<HTMLDivElement, MenuBarProps>(
  ({ items, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(menuBarStyles({ className }))} {...props}>
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <div className={cn(separatorStyles())}></div>}
            <button className={cn(menuButtonStyles())} onClick={item.onClick}>
              {item.label}
              {item.icon && <span className="ml-2">{item.icon}</span>}
            </button>
          </div>
        ))}
      </div>
    );
  }
);
