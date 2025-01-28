import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils";

const buttonStyles = cva(
  [
    "rounded-full",
    "rounded-tl-none",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-80",
    "hover:opacity-80",
    //"shadow-custom-inset", // Revisar
    "shadow-gray-900",
    "flex",
    "items-center",
    "justify-center",
    "relative",
    "gap-2", // Espaciado entre icono y texto
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
      disabled: {
        false: null,
        true: ["opacity-80", "cursor-not-allowed"],
      },
      hover: {
        false: null,
        true: ["opacity-80"],
      },
      variant: {
        solid: "",
        outline: "border-4 border-white",
      },
      shadow: {
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      },
      model: {
        model1: "rounded-full",
        model2: "rounded-full rounded-tl-none",
        model3: "rounded-full rounded-tr-none",
      },
      colorscheme: {
        model1:
          "bg-gradient-to-tr from-green-700 to-green-500 active:from-green-800 active:to-green-600 text-white",
        model2: "bg-cyan-100 text-gray-600 active:bg-cyan-200",
        model3: "bg-[#2b2c32] text-white active:bg-[#1c1d20]",
      },
      reverse: {
        false: false,
        true: true,
      },
      loading: {
        false: false,
        true: true,
      },
    },
    defaultVariants: {
      size: "md",
      variant: "outline",
      shadow: "sm",
      reverse: false,
    },
    compoundVariants: [
      {
        variant: "solid",
      },
      {
        variant: "outline",
      },
    ],
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    disabled?: boolean;
    hover?: boolean;
    icon?: React.ReactElement<SVGElement>; // Prop para el ícono
    reverse?: boolean; // Posición del ícono
    loading?: boolean;
    variant?: "solid" | "outline"; // Variante
    model?: "model1" | "model2" | "model3";
    colorscheme?: "model1" | "model2" | "model3";
    size?: Size; // Tamanio
    shadow?: "sm" | "md" | "lg"; // Posición del ícono
  };

export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      variant,
      disabled,
      hover,
      shadow,
      model,
      colorscheme,
      className,
      icon,
      reverse = false,
      loading,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          buttonStyles({
            variant,
            disabled,
            hover,
            shadow,
            model,
            colorscheme,
            size,
            loading,
            className,
          })
        )}
        {...props}
      >
        {icon && !reverse && (
          <span
            className={`inline-flex items-center ${
              loading ? "invisible" : "visible"
            }`}
          >
            {icon}
          </span>
        )}
        <span
          className={`whitespace-nowrap ${loading ? "invisible" : "visible"}`}
        >
          {children}
        </span>
        {loading && (
          <span className="absolute flex items-center">
            <LoadingIcon className="h-5 w-5" />
          </span>
        )}
        {icon && reverse && (
          <span
            className={`inline-flex items-center ${
              loading ? "invisible" : "visible"
            }`}
          >
            {icon}
          </span>
        )}
      </button>
    );
  }
);

export const LoadingIcon = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    role="status"
    className={`animate-spin ${className}`}
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="#E5E7EB"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    />
  </svg>
);
