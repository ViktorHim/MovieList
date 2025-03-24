import { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { className = "", children, disabled, ...othersProps } = props;

  return (
    <button
      type="button"
      className={cn(cls.btn, className, disabled ? "disabled" : "")}
      {...othersProps}
    >
      {children}
    </button>
  );
};
