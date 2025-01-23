import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../utils";

const switchStyles = cva(
  [
    "flex",
    "items-center",
    "flex-shrink-0",
    "bg-gray-300",
    "rounded-full",
    "duration-300",
    "ml-4",
    "ease-in",
    "peer-checked:bg-gradient-to-tr peer-checked:from-green-500 peer-checked:to-green-600",
    "after:w-16",
    "after:h-10",
    "after:z-10",
    "after:bg-gradient-to-tr after:from-white after:to-gray-200",
    "after:rounded-[1.3rem]",
    "after:shadow",
    "after:duration-300",
    "peer-checked:after:translate-x-12",
  ],
  {
    variants: {
      size: {
        sm: "w-16 h-6",
        md: "w-28 h-9",
        lg: "w-32 h-12 text-lg",
      },
      colorscheme: {
        basic: "bg-gradient-to-tr from-orange-500 to-orange-600",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        className: "after:w-11 after:h-7 peer-checked:after:translate-x-6",
      },
      {
        size: "lg",
        className:
          "after:w-20 after:h-[3.1rem] peer-checked:after:translate-x-12",
      },
    ],
    defaultVariants: {
      size: "md",
      colorscheme: "basic",
    },
  }
);

type SwitchTextAsideProps = ComponentProps<"input"> &
  VariantProps<typeof switchStyles> & {
    text: string;
  };

export const SwitchTextAside = forwardRef<
  HTMLInputElement,
  SwitchTextAsideProps
>(({ size, colorscheme, className, text, ...props }, ref) => {
  return (
    <label className="relative flex justify-between items-center p-1 text-lg border-gray-100 rounded-full">
      {text}
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
});
