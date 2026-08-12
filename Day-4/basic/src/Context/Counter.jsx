import { createContext, useState, React } from "react";

export const CounterContexts = createContext(null);

export const CounterProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContexts.Provider
      value={{
        name,
        count,
        setName,
        setCount,
        handleDecrement,
        handleIncrement,
      }}
    >
      {children}
    </CounterContexts.Provider>
  );
};
