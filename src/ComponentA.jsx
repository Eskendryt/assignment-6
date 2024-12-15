import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize count to 0
  const [isStarted, setIsStarted] = useState(false); // Track if the counter is running

  useEffect(() => {
    let intervalId;

    if (isStarted) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1); // Use callback form of setCount
      }, 1000);
    }

    return () => clearInterval(intervalId); // Cleanup interval on component unmount or state change
  }, [isStarted]); // Dependency: re-run when isStarted changes

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleStop = () => {
    setIsStarted(false);
  };

  return (
    <div>
      <h1>Value: {count}</h1>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Counter;
