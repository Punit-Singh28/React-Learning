import React, { useContext } from 'react';
import './App.css';
// import { CounterComponent } from './Components/counterComponent';
// import { CounterContexts } from './Context/counter';
import { Todo } from './Todo/todo';

function App() {
  // const { name, count } = useContext(CounterContexts);

  return (
    <>
      {/* <span>Parent</span>
      <h1>Name {name}</h1>
      <h1>Counter {count}</h1>
      <CounterComponent /> */}
      <Todo/>
    </>
  );
}

export default App;
