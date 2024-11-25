import { scrollToTop } from '../utilities/scrollToTop'
import { NavLink } from './NavLink'

export function PanelSeccionesItem({ background, icon, href, children }) {
  const handleClick = () => {
    scrollToTop('auto')
  }

  return (
    <div className="panel__item">
      <img src={background} alt="" className="panel__item__img" />
      <NavLink to={href} className="panel__item__link" onClick={handleClick}>
        <img src={icon} alt="" className="panel__item__link__icon" />
        <span className="panel__item__title">{children}</span>
      </NavLink>
    </div>
  )
}
