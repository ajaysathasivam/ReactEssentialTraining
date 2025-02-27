import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/store'
import {store2} from "./app/store2.jsx"
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <Provider store={store2}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>

)
