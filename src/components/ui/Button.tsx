import { ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

export const Button = ({ children, onClick, className }: buttonProps) => {
  return (
    <button
      type="button"
      className={`bg-violet-500 text-white hover:bg-violet-600 m-4 px-8 py-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
