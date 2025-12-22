"use client";

import React from "react";
import { useRouter } from "next/navigation";
import css from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "cancel" | "submit";
  size?: "small" | "medium" | "large";
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  href,
  children,
  ...props
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      e.preventDefault();
      router.push(href);
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  const className = [css.button, css[variant], css[size], props.className]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...props} onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
