import { memo } from "react";

function IncreaseChild({ onIncrease }) {
  console.log("re-render child");
  return (
    <div>
      <p>increase child</p>
      <button onClick={onIncrease}>Click Increase</button>
    </div>
  );
}

export default memo(IncreaseChild);
