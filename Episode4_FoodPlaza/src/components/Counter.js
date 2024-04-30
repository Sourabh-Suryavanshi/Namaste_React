import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(5);
  const [disable, setDisable] = useState(false);
  return (
    <div className="parent">
      Counter = {count}
      <div>
        <button
          onClick={() => {
            if (count < 10) setCount(count + 1);
            else {
              setDisable("true");
            }
          }}
          disabled={disable}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Counter;
