import { useRef } from "react";

function Focus() {
  const box = useRef();

  function focusInput() {
    box.current.focus();
  }

  return (
    <div>
      <input type="text" ref={box} />

      <button onClick={focusInput}>
        Focus
      </button>
    </div>
  );
}

export default Focus;