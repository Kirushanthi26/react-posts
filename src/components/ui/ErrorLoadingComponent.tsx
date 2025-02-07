import { ReactNode } from "react";

type ErrorLoadingProps = {
  children: ReactNode;
};

export const ErrorLoadingComponent = ({ children }: ErrorLoadingProps) => {
  return (
    <div className="w-3/4 mx-auto h-screen flex items-center justify-center">
      <p className="w-full p-5 m-3 bg-red-400 text-red-900 capitalize border-2 border-red-900 rounded text-4xl font-semibold text-center">
        {children}
      </p>
    </div>
  );
};
