import { AppRouter } from './AppRouter'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Modal } from './components/Modal'
import { Registro } from './pages/Registro/Registro'
import { Footer } from './components/Footer'
import { Login } from './pages/Login/Login'
import { RecuperarContra } from './components/RecuperarContra'

export function App() {
  return (
    <BrowserRouter>
      <Modal modalId="login">
        <Login />
      </Modal>
      <Modal modalId="registro">
        <Registro />
      </Modal>
      <Modal modalId="recuperar-contraseña">
        <RecuperarContra />
      </Modal>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}
