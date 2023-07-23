//Hooks
import React, { useEffect, useState } from "react";
//Styles
import "./Counter.css";

const Counter = (props) => {
  const [number, setNumber] = useState(props.startingNumber);

  useEffect(() => {
    const targetNumber = props.endingNumber;
    const duration = 2000;
    const startTimestamp = performance.now();

    const updateNumber = (timestamp) => {
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const updatedNumber = Math.round(
        progress * (targetNumber - props.startingNumber) + props.startingNumber
      );

      setNumber(updatedNumber);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    requestAnimationFrame(updateNumber);
  }, []);

  return (
    <div className="number-container">
      <h3>
        <span className="number">{number}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </h3>
      <h5 className="number-label">{props.numberLabel}</h5>
    </div>
  );
};

export default Counter;
