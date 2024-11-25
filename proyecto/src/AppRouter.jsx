import { Inicio } from './pages/Inicio/Inicio'
import { Hotel } from './pages/Hotel/Hotel'
import { Contactos } from './pages/Contactos/Contactos'
import { Routes, Route } from 'react-router-dom'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/contactos" element={<Contactos />} />
    </Routes>
  )
}
