import React from 'react'
import { useState } from 'react';

export const Server = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond]=useState('');
  const [ans, setAns]=useState(null);
  function addition() {
    
    setAns(Number(first) + Number(second));
  }
 
  return (
    <div>
      <h1>hello World</h1>
      <input type="number" value={first} onChange={(e)=>setFirst(e.target.value)} />
      <input type="number" value={second} onChange={(e)=>setSecond(e.target.value)}/>
      <button onClick={addition}>add</button>
      <div id="show">{ans !== null ? `Your Result: ${ans}` : "Result will appear here"}</div>
    </div>
  )
}

