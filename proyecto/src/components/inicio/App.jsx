import { useState } from 'react'
import Inicio from './Inicio'
import Hotel from '../hotel/Hotel'

function App() {
  const [path, setPath] = useState(window.location.pathname)

  return (
    <>
      {path === '/' && <Inicio />}
      {path === '/hotel' && <Hotel />}
    </>
  )
}

export default App
