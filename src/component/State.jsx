import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const decrenent = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={decrenent}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};
export default State;
