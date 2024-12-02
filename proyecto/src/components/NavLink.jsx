import { NavLink as NavLinkRouter } from 'react-router-dom'
import { seccion__link, active } from '../styles/navLink.module.css'

export function NavLink({ to, children, className = seccion__link, ...props }) {
  return (
    <NavLinkRouter
      {...props}
      className={({ isActive }) => {
        return isActive ? `${className} ${active}` : className
      }}
      to={to}
    >
      {children}
    </NavLinkRouter>
  )
}
