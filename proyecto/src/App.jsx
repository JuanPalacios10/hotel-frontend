import { AppRouter } from './AppRouter'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Modal } from './components/Modal'
import { Registro } from './pages/Registro/Registro'

export function App() {
  return (
    <BrowserRouter>
      <Modal>
        <Registro /> 
      </Modal>
      <Header />
      <AppRouter />
    </BrowserRouter>
  )
}
