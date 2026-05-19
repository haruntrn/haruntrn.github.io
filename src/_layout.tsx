import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { useEffect } from "react";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
