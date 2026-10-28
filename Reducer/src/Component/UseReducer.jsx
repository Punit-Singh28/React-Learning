import React from "react";
import { useReducer } from "react";

const empData = {
  name: '',
  email: '',
  password: '',
  city: ''
};
// console.log(empData);


const reducer = (state, action) => {
    return {...state, [action.type]:action.val}

};

const submit = (e) =>{
    console.log(e)
}

const UseReducer = () => {

  const [state, dispatch] = useReducer(reducer, empData)
//   console.log(state);
  

  return (
    <>
      <h1>Use Reducer</h1>
      <input type="text" onChange={(e)=>dispatch({val:e.target.value, type:'name'})} placeholder="Enter Name here" />
      <br />
      <br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value, type:'email'})} placeholder="Enter Email here" />
      <br />
      <br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value, type:'password'})} placeholder="Enter Password here" />
      <br />
      <br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value, type:'city'})} placeholder="Enter City here" />
      <br />
      <br />
      <button onClick={()=>submit(state)}>Submit</button>

      <ul>
        <li>Name:{state.name}</li>
        <li>Name:{state.email}</li>
        <li>Name:{state.password}</li>
        <li>Name:{state.city}</li>
      </ul>
    </>
  );
};

export default UseReducer;
