import { useState, useEffect, useRef } from "react";

function AutoCountDown() {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => {
    console.log(h1Ref.current.innerText);
    console.log(h1Ref.current.getBoundingClientRect());
  });

  const onHandleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    console.log(timerId.current);
  };
  const onHandleStop = () => {
    clearInterval(timerId.current);
    console.log(timerId.current);
  };
  console.log(count, prevCount.current);
  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={onHandleStart}>Start</button>
      <button style={{ marginLeft: 20 }} onClick={onHandleStop}>
        Stop
      </button>
    </div>
  );
}

export default AutoCountDown;
