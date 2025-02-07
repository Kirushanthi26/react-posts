import { ReactNode } from "react";

type cardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: cardProps) => {
  return (
    <div className={`bg-white p-4 m-4 shadow-md rounded-md ${className}`}>
      {children}
    </div>
  );
};
