import { AppRouter } from './AppRouter'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  )
}
