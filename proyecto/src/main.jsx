import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './styles/index.css'
import { ModalContextProvider } from './context/ModalContext'
import { UserContextProvider } from './context/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </UserContextProvider>
  </StrictMode>
)
