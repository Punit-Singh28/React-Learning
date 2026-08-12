import { React, useContext } from "react";

import { ContentApi } from "../Context/contextApi";


export const MainThird = () => {
    const {name} = useContext(ContentApi)
  return (
    <div>
      <h3>Hi I'm the Last component</h3>
      <p>Name: {name}</p>
    </div>
  )
}

