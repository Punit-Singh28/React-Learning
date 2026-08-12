import { useState } from "react";
import { MainFirst } from "./Components/mainFirst";
import { MainThird } from "./Components/mainThird";
import { ContextApiProvider } from "./Context/contextApi";
import { TodoInput } from "./Todo/todoInput";
import { Todo } from "./Pages/todo";

function App() {
  return (<>
    {/* <ContextApiProvider>
      <MainFirst />
      <MainThird />
    </ContextApiProvider> */}
    <Todo/>
    </>
  );
}

export default App;
