import { useReducer } from "react";

function reducer(state, action) {
  if (action === "add") {
    return state + 1;
  }

  if (action === "sub") {
    return state - 1;
  }

  if (action === "reset") {
    return 0;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => dispatch("add")}>
        +
      </button>

      <button onClick={() => dispatch("sub")}>
        -
      </button>

      <button onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default Counter;