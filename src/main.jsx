import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import StoreProvider from './Context/Store.jsx'
import StoreProvider from './context/Store.jsx'

createRoot(document.getElementById('root')).render(


  <StoreProvider>
    <App />
  </StoreProvider>

  // <StrictMode>
  //   <StoreProvider>
  //     <App />
  //   </StoreProvider>
  // </StrictMode>,
)
