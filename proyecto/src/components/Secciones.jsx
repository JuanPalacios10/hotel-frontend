import { ListaSecciones } from './ListaSecciones'
import { Seccion } from './Seccion'
import { Logo } from './Logo'
import logo from '../assets/images/logo/logo blanco letras recorte.png'
import { Button } from './Button'
import { useModalContext } from '../context/ModalContext'
import { barra, menu, buttons, btnReserva } from '../styles/secciones.module.css'
import { VerticalButtons } from './VerticalButtons'
import { NavLink } from './NavLink'
import { Profile } from './Profile'
import { useUserContext } from '../context/UserContext'

export const Secciones = () => {
  const { user } = useUserContext()
  const { openModal } = useModalContext()

  return (
    <div className={barra}>
      <Logo logoImg={logo} />
      <div className={menu}>
        <ListaSecciones>
          <Seccion to="/">INICIO</Seccion>
          <Seccion to="/hotel">HOTEL</Seccion>
          <Seccion to="/habitaciones">HABITACIONES</Seccion>
          <Seccion to="/servicios">SERVICIOS</Seccion>
          <Seccion to="/contactos">CONTACTOS</Seccion>
          <Seccion to="/normas">NORMAS</Seccion>
        </ListaSecciones>
        <div className={buttons}>
          {user.token ? (
            <Profile />
          ) : (
            <VerticalButtons>
              <Button handleClick={() => openModal('login')}>Iniciar Sesión</Button>
              <Button handleClick={() => openModal('registro')}>Registrarse</Button>
            </VerticalButtons>
          )}
          <NavLink to="/reservas">
            <Button className={btnReserva}>Reservar Ya</Button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
