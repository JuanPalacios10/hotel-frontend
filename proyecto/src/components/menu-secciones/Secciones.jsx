import '../../styles/secciones.css'
import logo from '../../assets/images/logo/logo blanco letras.png'

const Secciones = () => {
  return (
    <nav className="menu-secciones">
      <div className="barra">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="lista-secciones">
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
        </ul>
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
