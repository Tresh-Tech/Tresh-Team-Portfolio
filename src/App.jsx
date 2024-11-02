import "./styles/App.css";
import "ldrs/grid";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import CanvasBg from "./components/canvas-bg/canvas-bg";
import { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Link } from "lucide-react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisi = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="hero-container">
        <CanvasBg />
        <div className="hero">
          <div className="loading">
            <l-grid size="60" speed="1.5" color="#646cff"></l-grid>
          </div>
          <br />
          <h1>
            <RoughNotation
              color="#535bf2"
              strokeWidth="2.5"
              type="highlight"
              show={true}
            >
              Tresh
            </RoughNotation>
            <span className="black">
              <span> </span>
              Team
            </span>
          </h1>
          <br />
          <p>Welcome To Tresh Tech Boiler Plate</p>
          <br />
          <a href="#">Tresh Tech Official</a>
          <br />
          <br />
          <button className="" onClick={handleVisi}>
            {" "}
            Click Me
          </button>
          <br />
          <div className="command">
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>Calendar</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </div>
      </div>

      {isVisible && (
        <div>
          <div className="popup">
            <h2>
              Get
              <br />
              To Work
            </h2>
            <br />
            <button onClick={handleVisi}>AYE AYE</button>
          </div>
        </div>
      )}
      <div className="space">space</div>
    </>
  );
}

export default App;
