import Basic from "./Pattern/Basic";
import React from "react";
const App = () => {
  const [basicval, setbasicval] = React.useState(false);

  const showBasic = () => {
    setbasicval(true);
  };
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={showBasic}>Show Basic Pattern</button>
      <div style={{margin:'10px 0px'}}>{basicval && <Basic />}</div>
    </>
  );
};

export default App;
