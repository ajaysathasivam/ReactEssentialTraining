import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from './Provider/Provider.jsx'
import Reducers from './test.jsx'

createRoot(document.getElementById('root')).render(
  <Provider>
    <StrictMode>
      {/* <App /> */}
      <Reducers/>
    </StrictMode>
  </Provider>
)
