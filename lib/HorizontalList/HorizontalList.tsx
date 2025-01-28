import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../utils";

const validatorCardStyles = cva(["flex", "flex-col", "items-center"], {
  variants: {},
  defaultVariants: {},
});

const buttonStyles = cva(
  [
    "bg-gradient-to-b",
    "text-white",
    "font-semibold",
    "rounded-full",
    "rounded-tl-none",
    "px-4",
    "py-2",
    "shadow-md",
    "hover:scale-105",
    "transition-transform",
  ],
  {
    variants: {
      colorscheme: {
        green: "from-green-600 to-green-800",
      },
    },
    defaultVariants: {
      colorscheme: "green",
    },
  }
);

type ValidatorCardProps = {
  name: string;
} & ComponentProps<"div">;

export const ValidatorCard = forwardRef<HTMLDivElement, ValidatorCardProps>(
  ({ name, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(validatorCardStyles({ className }))}
        {...props}
      >
        <div className="h-4 w-0.5 bg-black"></div>
        <button className={cn(buttonStyles())}>{name}</button>
      </div>
    );
  }
);

const validatorsContainerStyles = cva(
  ["flex", "flex-wrap", "justify-start", "gap-4"],
  {
    variants: {},
    defaultVariants: {},
  }
);

type HorizontalListProps = {
  validators: string[];
} & ComponentProps<"div">;

export const HorizontalList = forwardRef<HTMLDivElement, HorizontalListProps>(
  ({ validators, className, ...props }, ref) => {
    return (
      <div {...props} ref={ref}>
        <h2 className="text-lg font-bold mb-2">Validadores</h2>
        <div>
          <div className="h-0.5 w-full bg-black"></div>
          <div className={cn(validatorsContainerStyles({ className }))}>
            {validators.map((name, index) => (
              <ValidatorCard key={index} name={name} />
            ))}
          </div>
        </div>
      </div>
    );
  }
);
