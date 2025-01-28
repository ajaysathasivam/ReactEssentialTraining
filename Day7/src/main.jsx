import {  createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./GlobalStyles.scss"
import Provider from './Provider/Provider.jsx'

export const GlobalContext = createContext()
createRoot(document.getElementById('root')).render(
  <Provider >
    <StrictMode>
      
      <App />
    </StrictMode>,
  </Provider>

)
