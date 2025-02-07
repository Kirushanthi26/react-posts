import { ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: buttonProps) => {
  return (
    <button
      type="button"
      className="bg-violet-500 text-white hover:bg-violet-600 m-4 px-8 py-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
