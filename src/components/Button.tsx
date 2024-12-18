import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string; // Thêm className vào props
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "", // Đặt className mặc định là chuỗi rỗng
}) => {
  const baseStyles =
    "px-4 py-2 rounded-full font-semibold transition-all duration-300";
  const primaryStyles = "bg-blue-600 text-white hover:bg-blue-700";
  const secondaryStyles = "bg-gray-600 text-white hover:bg-gray-700";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${
        variant === "primary" ? primaryStyles : secondaryStyles
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
