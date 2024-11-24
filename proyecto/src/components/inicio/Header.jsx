import Secciones from '../menu-secciones/Secciones'

function Header({ title, children }) {
  return (
    <header className="header">
      <Secciones />
      {children}
    </header>
  )
}

export default Header
