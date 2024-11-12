import "./styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar";

import MainLayout from "./layout/MainLayout";
import DashBoardLayout from "./layout/DashBoardLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import DashBoard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/dashboard",
        element: <DashBoardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashBoard />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
