import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const selectInputStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "py-2",
  "px-4",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-primary-500 ",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
  "bg-[#fff] shadow-[inset_5px_5px_10px_#ebebeb,inset_-5px_-5px_10px_#ffffff]",
]);

const selectInputSizeStyle = cva([], {
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
type Option = {
  label: string;
  value: any;
};
type SelectProps = ComponentProps<"select"> &
  VariantProps<typeof selectInputStyles> &
  VariantProps<typeof selectInputSizeStyle> & {
    label: string;
    options: Option[];
  };

export const SelectInput = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label = "label select", options, size, ...props }, ref) => {
    return (
      <div className={cn(selectInputSizeStyle({ size }))}>
        <label>{label}</label>
        <select
          ref={ref}
          className={cn(selectInputStyles({ className }))}
          {...props}
        >
          {options.map((option) => {
            return <option value={option.value}>{option.label}</option>;
          })}
        </select>
      </div>
    );
  }
);
