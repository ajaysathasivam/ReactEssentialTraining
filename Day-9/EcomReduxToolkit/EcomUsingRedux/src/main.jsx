import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { persistor, store } from "../src/store/store.jsx"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import "./global.scss"
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <App />
      </StrictMode>
    </PersistGate>
  </Provider>
)
