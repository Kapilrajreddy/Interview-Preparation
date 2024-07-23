import React, { useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  return (
    <div>
        <h1>Progress Bar</h1>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "blue",
          height: "20px",
        }}
      ></div>
      <button onClick={increaseProgress}>Increase Progress</button>
    </div>
  );
}

export default ProgressBar;
