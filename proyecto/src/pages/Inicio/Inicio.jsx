import { Banner } from '../../components/Banner'
import { PanelSecciones } from '../../components/PanelSecciones'
import { PanelServicios } from '../../components/PanelServicios'
import { PanelServiciosItem } from '../../components/PanelServicioItem'
import { PanelSeccionesItem } from '../../components/PanelSeccionesItem'
import bannerImg from '../../assets/images/inicio/banner-inicio.jpeg'
import allImg from '../../assets/images/inicio/All inclusive.webp'
import showImg from '../../assets/images/inicio/show.webp'
import piscinaImg from '../../assets/images/inicio/Piscinas.webp'
import marImg from '../../assets/images/inicio/Vista al mar.webp'
import habitacionesImg from '../../assets/images/inicio/habitacion.webp'
import habitacionIcon from '../../assets/images/inicio/icon habitaciones.webp'
import serviciosImg from '../../assets/images/inicio/servicios.webp'
import serviciosIcon from '../../assets/images/inicio/icon park.webp'
import hotelImg from '../../assets/images/inicio/nuestro-hotel.webp'
import hotelIcon from '../../assets/images/inicio/icono-hotel.webp'
import '../../styles/inicio.css'

export function Inicio() {
  return (
    <>
      <Banner imgUrl={bannerImg} />
      <PanelServicios>
        <PanelServiciosItem icon={allImg}>Todo incluido / All inclusive</PanelServiciosItem>
        <PanelServiciosItem icon={showImg}>Show nocturnos</PanelServiciosItem>
        <PanelServiciosItem icon={piscinaImg}>Piscina</PanelServiciosItem>
        <PanelServiciosItem icon={marImg}>Habitaciones vista al mar</PanelServiciosItem>
      </PanelServicios>
      <main>
        <section className="bienvenida">
          <h4 className="bienvenida__title bienvenida__title--bold">Su casa en San Andrés</h4>
          <h4 className="bienvenida__title">Hotel Buen Vivir</h4>
          <p className="bienvenida__info">
            Explora el confort y la hospitalidad en nuestras sedes a lo largo de Colombia. Estamos
            aquí para hacer de cada estadía una experiencia única y memorable, esforzandonos por
            brindarle la mejor experiencia en su visita. ¡Tu descanso es nuestra prioridad!
          </p>
        </section>
        <PanelSecciones>
          <PanelSeccionesItem
            background={habitacionesImg}
            icon={habitacionIcon}
            href="/habitaciones"
          >
            HABITACIONES
          </PanelSeccionesItem>
          <PanelSeccionesItem background={serviciosImg} icon={serviciosIcon} href="/servicios">
            SERVICIOS
          </PanelSeccionesItem>
          <PanelSeccionesItem background={hotelImg} icon={hotelIcon} href="/hotel">
            NUESTRO HOTEL
          </PanelSeccionesItem>
        </PanelSecciones>
      </main>
    </>
  )
}
