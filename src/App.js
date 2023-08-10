import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Calculate the color based on count
    const color = count % 10 === 0 ? `rgba(0, ${count * 10}, 0, 0.8)` : 'rgba(225, 0, 0, 0.8)';
    // Apply the background color to the result element
    const resultElement = document.getElementById("result");
    if (resultElement) {
      resultElement.style.backgroundColor = color;
    }
  }, [count]);

  function negative() {
    setCount(count - 1);
  };

  function positive() {
    setCount(count + 1);
  }

  function resethandler() {
    setCount(0);
  }
  return (
    <div className="wrapper">
      <div id="heading" className="heading">Counter App</div>
      <div className="temp">
        <div className="calc">
          <div className="minus">
            <button id="qq" onClick={negative}>
              <h1>-</h1>
            </button>
          </div>
          <div className="result">
            {count}
          </div>
          <div className="plus">
            <button id="qq" onClick={positive}>
              <h1>+</h1>
            </button>
          </div>
        </div>
        <button onClick={resethandler} className="reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
