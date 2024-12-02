import { NavLink } from './NavLink'
import { seccion } from '../styles/seccion.module.css'

export function Seccion({ to, children }) {
  return (
    <li className={seccion}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  )
}
