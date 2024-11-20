import '../../styles/panel-secciones.css'
import habitacionesImg from '../../assets/images/inicio/habitacion.webp'
import habitacionIcon from '../../assets/images/inicio/icon habitaciones.webp'
import serviciosImg from '../../assets/images/inicio/servicios.webp'
import serviciosIcon from '../../assets/images/inicio/icon park.webp'
import hotelImg from '../../assets/images/inicio/nuestro-hotel.webp'
import hotelIcon from '../../assets/images/inicio/icono-hotel.webp'

function PanelSecciones() {
  return (
    <section className="panel">
      <div className="panel__item">
        <img src={habitacionesImg} alt="" className="panel__item__img" />
        <a href="#" className="panel__item__link">
          <img src={habitacionIcon} alt="" className="panel__item__link__icon" />
          <span className="panel__item__title">HABITACIONES</span>
        </a>
      </div>
      <div className="panel__item">
        <img src={serviciosImg} alt="" className="panel__item__img" />
        <a href="#" className="panel__item__link">
          <img src={serviciosIcon} alt="" className="panel__item__link__icon" />
          <span className="panel__item__title">SERVICIOS</span>
        </a>
      </div>
      <div className="panel__item">
        <img src={hotelImg} alt="" className="panel__item__img" />
        <a href="#" className="panel__item__link">
          <img src={hotelIcon} alt="" className="panel__item__link__icon" />
          <span className="panel__item__title">NUESTRO HOTEL</span>
        </a>
      </div>
    </section>
  )
}

export default PanelSecciones
