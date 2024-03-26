import { ReactNode } from "react";
interface ButtonType {
  children: ReactNode;
  color: string;
  hoverColor: string;
}

const Button = ({ children, color, hoverColor }: ButtonType) => {
  return (
    <button className={`px-6 py-3 rounded-full ${color} ${hoverColor}`}>{children}</button>
  );
};

export default Button;
