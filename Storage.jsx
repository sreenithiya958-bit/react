import { useState } from "react";

function Storage() {
  const [count, setCount] = useState(
    localStorage.getItem("count") || 0
  );

  function add() {
    const newCount = Number(count) + 1;

    setCount(newCount);

    localStorage.setItem("count", newCount);
  }

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={add}>
        Add
      </button>
    </div>
  );
}

export default Storage;