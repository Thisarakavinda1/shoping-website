import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Component/Context/ShopContext.jsx'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>

    

    
  </StrictMode>
)
