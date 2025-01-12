import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyComponent from './components/MyComponent.jsx'
import WidthHeight from './components/WidthHeight.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WidthHeight />
  </StrictMode>,
)
