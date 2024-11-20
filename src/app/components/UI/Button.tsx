import React, { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {
  variation?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  variation = "primary",
  size = "medium",
  children,
  ...props
}) => {
  const sizeClasses = {
    small: "text-[1.2rem] px-2 py-1 font-semibold uppercase text-center",
    medium: "text-[1.4rem] px-4 py-3 font-medium",
    large: "text-[1.6rem] px-6 py-3 font-medium",
  };

  const variationClasses = {
    primary: "text-brand-50 bg-brand-600 hover:bg-brand-700",
    secondary:
      "text-grey-600 bg-grey-0 border border-grey-200 hover:bg-grey-50",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  return (
    <button
      className={clsx(
        "rounded shadow-sm border-none",
        sizeClasses[size],
        variationClasses[variation]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
