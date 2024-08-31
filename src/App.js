import React, { useState } from "react";
import "./styles.css";

const App = () => {
  // Set initial angle to 180 to place the slider in the middle
  const [angle, setAngle] = useState(0);

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value > 360) value = 360;
    if (value < 0) value = 0;
    setAngle(value);
  };

  const handleSliderChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  const handleRadioChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  return (
    <div className="container">
      <h1>Angle Selector</h1>
      <input
        type="number"
        value={angle}
        onChange={handleInputChange}
        min="0"
        max="360"
        id="angleInput"
      />
      <input
        type="range"
        value={angle}
        onChange={handleSliderChange}
        min="0"
        max="360"
        className="slider"
        id="angleSlider"
      />
      <div className="radio-group">
        {[0, 45, 60, 90, 180].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="angle"
              value={value}
              checked={angle === value}
              onChange={handleRadioChange}
            />{" "}
            {value}
          </label>
        ))}
      </div>
    </div>
  );
};

export default App;
