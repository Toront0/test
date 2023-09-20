import React from "react";

interface IButton {
  children: React.ReactNode;
}

const Button = ({ children }: IButton) => {
  return (
    <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-opac-b-1 dark:bg-opac-w-1">
      <div className="w-6 h-6">{children}</div>
    </button>
  );
};

export default Button;
