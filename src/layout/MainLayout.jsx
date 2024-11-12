import Navbar from "@/components/Navbar";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default MainLayout;