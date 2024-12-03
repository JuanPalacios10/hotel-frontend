import { servicios__item, servicios__item__icon } from '../styles/panelServiciosItem.module.css'

export function PanelServiciosItem({ icon, children }) {
  return (
    <div className={servicios__item}>
      <img src={icon} alt="" className={servicios__item__icon} />
      <span>{children}</span>
    </div>
  )
}
