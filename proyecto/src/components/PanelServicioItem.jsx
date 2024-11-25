export function PanelServiciosItem({ icon, children }) {
  return (
    <div className="servicios__item">
      <img src={icon} alt="all inclusive" className="servicios__item__icon" />
      <span className="servicios__item__text">{children}</span>
    </div>
  )
}
