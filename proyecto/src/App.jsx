import { useState } from 'react'
import Inicio from './components/inicio/Inicio'
import Hotel from './components/hotel/Hotel'

function App() {
  const [path] = useState(window.location.pathname)

  return (
    <>
      {path === '/' && <Inicio />}
      {path === '/hotel' && <Hotel />}
    </>
  )
}

export default App
