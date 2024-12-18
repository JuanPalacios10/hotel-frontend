
import {
  footer,
  logo,
  footerContenido,
  footerSection,
  redes,
  footerBottom
} from '../styles/footer.module.css' 
import { Logo } from './Logo'
import logoImg from '../assets/images/logo/logo blanco letras recorte.png'
import { NavLink } from './NavLink'

export function Footer() {
  return (
    <footer className={footer}>
      <div className={footerContenido}>
        <Logo logoImg={logoImg} className={logo} />
        <div className={footerSection}>
          <h3>INFORMACION</h3>
          <ul>
            <li>
              <NavLink to="/hotel">Hotel</NavLink>
            </li>
            <li>
              <NavLink to="/habitaciones">Habitaciones</NavLink>
            </li>
            <li>
              <NavLink to="/servicios">Servicios</NavLink>
            </li>
            <li>
              <NavLink to="/contactos">Contactos</NavLink>
            </li>
            <li>
              <NavLink to="/normas">Normas</NavLink>
            </li>
          </ul> 
        </div>
        <div className={footerSection}>
          <h3>CONTACTOS</h3>
          <ul>
            <li>Telefono: 123456789</li>
            <li>Email: hotelbuenvivir@gmail.co.com</li>
            <li>Direccion: Av. 123 Calle 456</li>
          </ul>
        </div>
        <div className={footerSection}>
          <h3>REDES</h3>
          <ul className={redes}>
            <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebbok </a>
            </li>
            <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={footerBottom}>
        <p>&copy; 2024 Hotel Buen Vivir. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
