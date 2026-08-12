import React from "react";

const UseEffect = () => {
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);

  React.useEffect(() => {
    console.log(count, "Without-Depedency");
  });
  React.useEffect(() => {
    console.log(count, "With-Depedency");
  }, [count]);
  React.useEffect(() => {
    console.log(count, "empty-Depedency");
  }, []);
  return (
    <>
      <h1>UseEffect</h1>

      <h2>count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        without-Dependency
      </button>
       <h2>count: {count1}</h2>
       <button onClick={() => setCount1((prev) => prev + 1)}>
        with-Dependency
      </button>
    </>
  );
};

export default UseEffect;
