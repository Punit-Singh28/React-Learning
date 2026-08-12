import { useContext, useRef, React } from "react";
import { CounterContexts } from "../Context/counter";

export const CounterComponent = () => {
  const { handleIncrement, handleDecrement, setName } =
    useContext(CounterContexts);

  const nameValue = useRef(null);
  const handleInput = () => {
    setName(nameValue.current.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <span>child</span>
      <input type="text" ref={nameValue} />
      <button onClick={handleInput}>Done</button>
      {/* <input type="text" onChange={handleInput} /> */}

      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </div>
  );
};
