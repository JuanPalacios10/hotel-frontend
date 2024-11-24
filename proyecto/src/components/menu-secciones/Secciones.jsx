import ListaSecciones from './ListaSecciones'
import Seccion from './Seccion'
import { NavLink } from './NavLink'
import Logo from './Logo'
import '../../styles/secciones.css'
import logo from '../../assets/images/logo/logo blanco letras.png'

const Secciones = () => {
  return (
    <nav className="menu-secciones">
      <div className="barra">
        <Logo logo={logo} />
        {/* <ul className="lista-secciones">
          <li>
            <a href="/">INICIO</a>
          </li>
          <li>
            <a href="/hotel"> EL HOTEL</a>
          </li>
          <li>
            <a href="#habitaciones">HABITACIONES</a>
          </li>
          <li>
            <a href="#servicios">SERVICIOS</a>
          </li>
          <li>
            <a href="#contacto">CONTACTOS</a>
          </li>
          <li>
            <a href="#normas">NORMAS</a>
          </li>
        </ul> */}
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
          <button className="btn InicioSesion">Iniciar Sesión</button>
          <button className="btn Registro">Registrarse</button>
        </div>
        <div className="botones2">
          <button className="btn Reservar">Reservar Ya</button>
        </div>
      </div>
    </nav>
  )
}

export default Secciones
