import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-primary-500 ",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
  " bg-[#fff] shadow-[inset_5px_5px_10px_#ebebeb,inset_-5px_-5px_10px_#ffffff]",
]);
const inputSizeStyle = cva([], {
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
});

type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyles> &
  VariantProps<typeof inputSizeStyle> & {
    label: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label = "label input", size, ...props }, ref) => {
    return (
      <div className={cn(inputSizeStyle({ size }))}>
        <label>{label}</label>
        <input
          ref={ref}
          type="text"
          autoComplete="off"
          className={cn(inputStyles({ className }))}
          {...props}
        />
      </div>
    );
  }
);
