import { Secciones } from './Secciones'

export function Header({ children }) {
  return (
    <header className="header">
      <Secciones />
      {children}
    </header>
  )
}
