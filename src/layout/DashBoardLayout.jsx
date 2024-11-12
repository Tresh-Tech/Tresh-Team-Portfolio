import NavBar from "@/components/Navbar";
import { NavLink, Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <>
      <NavBar />

      <main>
        <h1>Dashboard Layout</h1>
        <hr />
        <Outlet />
      </main>
    </>
  );
};

export default DashBoardLayout;
