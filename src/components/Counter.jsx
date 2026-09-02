import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <strong>{count}</strong>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Zerar</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;