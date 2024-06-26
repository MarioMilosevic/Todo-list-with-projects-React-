import { ReactNode, MouseEvent } from "react";

interface ButtonType {
  children: ReactNode;
  color: string;
  hoverColor: string;
  handleClick: (e: MouseEvent<HTMLButtonElement>)=> void | (() => void); 
}


const Button = ({ children, color, hoverColor, handleClick }: ButtonType) => {
  return (
    <button
      className={`px-4 py-2 w-full text-xl font-semibold rounded-lg ${color} ${hoverColor}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
