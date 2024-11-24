import Inicio from './components/inicio/Inicio'
import Hotel from './components/hotel/Hotel'
import { Routes, Route } from 'react-router-dom'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/hotel" element={<Hotel />} />
    </Routes>
  )
}

export default AppRouter
