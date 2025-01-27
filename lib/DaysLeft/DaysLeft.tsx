import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../utils";

const daysLeftStyles = cva(
  ["flex", "rounded-full", "rounded-tr-none", "font-medium", ""],
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

type DaysLeftProps = ComponentProps<"section"> &
  VariantProps<typeof daysLeftStyles> & {
    daysLeft: number;
  };

export const DaysLeft = forwardRef<HTMLElement, DaysLeftProps>(
  ({ daysLeft = 20, className, size, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(daysLeftStyles({ className, size }))}
        {...props}
      >
        <div className="bg-[#171717] text-white h-full pl-5 pr-2 rounded-l-full text-3xl font-normal text-nowrap">
          {daysLeft}
        </div>

        <div className="bg-[#ff8a00] flex items-center pr-4 rounded-r-2xl rounded-tr-none text-nowrap font-semibold">
          <div
            className="w-0 h-0 
          border-t-[18px] border-t-transparent
          border-l-[18px] border-l-[#171717]
          border-b-[18px] border-b-transparent pr-2"
          ></div>
          Día{daysLeft !== 1 && "s"} restante{daysLeft !== 1 && "s"}
        </div>
      </section>
    );
  }
);
