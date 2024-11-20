import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { Secciones } from './components/menu secciones/secciones'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Secciones />
  </StrictMode>
)

