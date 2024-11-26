import { Inicio } from './pages/Inicio/Inicio'
import { Hotel } from './pages/Hotel/Hotel'
import { Contactos } from './pages/Contactos/Contactos'
import { Routes, Route } from 'react-router-dom'
import { Normas } from './pages/Normas/Normas'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/contactos" element={<Contactos />} />
      <Route path="/normas" element={<Normas />} />
    </Routes>
  )
}
