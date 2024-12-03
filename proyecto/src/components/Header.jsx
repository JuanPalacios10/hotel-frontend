import { Secciones } from './Secciones'

export function Header({ children }) {
  return (
    <header>
      <Secciones />
      {children}
    </header>
  )
}
