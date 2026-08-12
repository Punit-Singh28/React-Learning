import React from "react";

import { useState } from "react";

export const Self = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div>
        <h2>Hello</h2>
        {display ? <h1>Punit Singh</h1> : null}

        {/* <h1>Punit Singh</h1> */}
      </div>
    </>
  );
};
