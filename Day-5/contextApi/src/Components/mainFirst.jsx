import { React, useContext } from "react";
import { Mainsecond } from "./mainsecond";
import { ContentApi } from "../Context/contextApi";
export const MainFirst = () => {
  const { name, setName } = useContext(ContentApi);
  return (
    <>
      <h1>Hi I'm the main first component</h1>
      <div><select value={name} onChange={(e)=>setName(e.target.value)}>
        <option value="">Select</option>
        <option value="Punit">Punit</option>
        <option value="Singh">Singh</option>
      </select>
      
      <button onClick={()=>setName('')} >Reset</button>
      </div>
      <Mainsecond />
    </>
  );
};
