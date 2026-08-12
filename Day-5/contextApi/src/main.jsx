import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoComponentsContext } from './Context/TodoCotext.jsx'

createRoot(document.getElementById('root')).render(
  <TodoComponentsContext>
    <App />
  </TodoComponentsContext>,
)
