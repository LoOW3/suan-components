import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../utils";

const switchStyles = cva(
  [
    "flex",
    "items-center",
    "flex-shrink-0",
    "ml-4",
    "p-1",
    "bg-gray-300",
    "rounded-full",
    "duration-300",
    "ease-in-out",
    "peer-checked:bg-green-400",
    "after:w-8",
    "after:h-8",
    "after:bg-white",
    "after:rounded-full",
    "after:shadow-md",
    "after:duration-300",
    "peer-checked:after:translate-x-6",
  ],
  {
    variants: {
      size: {
        sm: "w-10 h-6",
        md: "w-16 h-10",
        lg: "w-20 h-12 text-lg",
      },
      colorscheme: {
        basic: "bg-gray-300 peer-checked:bg-green-400",
        danger: "bg-red-500 peer-checked:bg-green-400",
        xd: "bg-violet-700 peer-checked:bg-teal-400",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        className: "after:w-4 after:h-4 peer-checked:after:translate-x-4",
      },
      {
        size: "lg",
        className: "after:w-10 after:h-10 peer-checked:after:translate-x-8",
      },
    ],
    defaultVariants: {
      size: "md",
      colorscheme: "basic",
    },
  }
);

type SwitchProps = ComponentProps<"input"> & VariantProps<typeof switchStyles>;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ size, colorscheme, className, ...props }, ref) => {
    return (
      <label className="relative flex justify-between items-center p-2 text-xl">
        <input
          type="checkbox"
          ref={ref}
          {...props}
          className="absolute left-0 top-0 w-full h-full appearance-none peer rounded-md"
        />
        <span
          className={cn(switchStyles({ size, colorscheme, className }))}
        ></span>
      </label>
    );
  }
);

/* className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6" */
