import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <main className="relative h-screen w-full p-8 bg-slate-100">
      <Outlet />
    </main>
  );
};
