import { ListaSecciones } from './ListaSecciones'
import { Seccion } from './Seccion'
import { NavLink } from './NavLink'
import { Logo } from './Logo'
import logo from '../assets/images/logo/logo blanco letras.png'
import { Button } from './Button'
import { useModalContext } from '../context/ModalContext'
import '../styles/secciones.css'

export const Secciones = () => {
  const {openModal} = useModalContext()

  return (
    <nav className="menu-secciones">
      <div className="barra">
        <Logo logo={logo} />
        <ListaSecciones className="lista-secciones">
          <Seccion>
            <NavLink to="/">INICIO</NavLink>
          </Seccion>
          <Seccion>
            <NavLink to="/hotel">HOTEL</NavLink>
          </Seccion>
          <Seccion>
            <NavLink to="/habitaciones">HABITACIONES</NavLink>
          </Seccion>
          <Seccion>
            <NavLink to="/servicios">SERVICIOS</NavLink>
          </Seccion>
          <Seccion>
            <NavLink to="/contactos">CONTACTOS</NavLink>
          </Seccion>
          <Seccion>
            <NavLink to="/normas">NORMAS</NavLink>
          </Seccion>
        </ListaSecciones>
        <div className="botones1">
          <Button handleClick={() => openModal("login")}>Iniciar Sesión</Button>
          <Button handleClick={() => openModal("registro")}>Registrarse</Button>
        </div>
        <div className="botones2">
          <Button className="Reservar">Reservar Ya</Button>
        </div>
      </div>
    </nav>
  )
}
