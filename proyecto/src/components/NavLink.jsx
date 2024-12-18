import { NavLink as NavLinkRouter } from 'react-router-dom'
import { seccion__link, active } from '../styles/navLink.module.css'
import { scrollToTop } from '../utilities/scroll-helper'

export function NavLink({ to, children, className = seccion__link, handleClick, ...props }) {
  return (
    <NavLinkRouter
      {...props}
      className={({ isActive }) => {
        return isActive ? `${className} ${active}` : className
      }}
      to={to}
      onClick={() => {
        scrollToTop()
        if (handleClick) handleClick()
      }}
    >
      {children}
    </NavLinkRouter>
  )
}
