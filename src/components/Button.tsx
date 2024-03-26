import { ReactNode } from "react";
interface ButtonType {
  children: ReactNode;
  color: string;
  hoverColor: string;
}

const Button = ({ children, color, hoverColor }: ButtonType) => {
  return (
    <button className={`px-4 py-2 w-full text-xl rounded-full ${color} ${hoverColor}`}>{children}</button>
  );
};

export default Button;