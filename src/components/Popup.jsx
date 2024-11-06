import { useState } from "react"

function PopUp({ text }) {

      const [isVisible, setIsVisible] = useState(false);

      const handleVisi = () => {
        setIsVisible(!isVisible);
      };

    return (
      <>
        <button className="" onClick={handleVisi}>
          {" "}
          {text}
        </button>

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
      </>
    );
}

export default PopUp;