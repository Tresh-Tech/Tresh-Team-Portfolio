import "./styles/App.css";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* <div className="px-[50px] w-full"> */}
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
