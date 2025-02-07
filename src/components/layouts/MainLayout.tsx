import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <main className="relative min-h-screen h-auto w-full bg-slate-100">
      <Outlet />
    </main>
  );
};
