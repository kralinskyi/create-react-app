import React from "react";

const Controls = ({ onDecrement, onIncrement }) => {
  return (
    <div>
      <button type="button" name="decrement" onClick={onDecrement}>
        -1
      </button>
      <button type="button" name="increment" onClick={onIncrement}>
        +1
      </button>
    </div>
  );
};

export default Controls;
