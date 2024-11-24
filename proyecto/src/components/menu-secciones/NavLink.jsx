import { NavLink as NavLinkRouter } from 'react-router-dom'

export function NavLink({ to, children, className, ...props }) {
  return (
    <NavLinkRouter
      {...props}
      className={({ isActive }) => {
        const active = isActive ? ' active' : ''
        return className ? `${className}${active}` : active.trim()
      }}
      to={to}
    >
      {children}
    </NavLinkRouter>
  )
}
