import CanvasBg from "@/components/canvas-bg/canvas-bg";
import Navbar from "@/components/Navbar";


function MainLayout() {

    return (
      <>
      <header>
        <Navbar/>
      </header>
        <div className="hero-container">
          <CanvasBg />
          <div className="hero">
            <span>Hello</span>
          </div>
        </div>
      </>
    )
}

export default MainLayout;