function PanelSeccionesItem({ background, icon, children }) {
  return (
    <div className="panel__item">
      <img src={background} alt="" className="panel__item__img" />
      <a href="#" className="panel__item__link">
        <img src={icon} alt="" className="panel__item__link__icon" />
        <span className="panel__item__title">{children}</span>
      </a>
    </div>
  )
}

export default PanelSeccionesItem
