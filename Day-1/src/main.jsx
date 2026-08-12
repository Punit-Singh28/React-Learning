import { createRoot } from 'react-dom/client';
// import { App } from './App.jsx';
// import { App_Dup } from './App_Dup.jsx';
import { Self } from "./Self.jsx"; 

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <App_Dup /> */}
    <Self />
  </>,
);