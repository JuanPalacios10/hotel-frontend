import { TituloTexto } from '../../components/TituloTexto'
import { ImagenCentro } from '../../components/ImagenCentro'
import hotel5estrellas from '../../assets/images/hotel/hotel5estrellas.jpg'
import piscinaHotel from '../../assets/images/hotel/piscinahotel.jpg'
import hhotel from '../../assets/images/hotel/hhotel.jpg'
import { Banner } from '../../components/Banner'

export function Hotel() {
  return (
    <>
      <Banner imgUrl={hhotel}>EL HOTEL</Banner>
      <main>
        <TituloTexto
          classTitle="text-title"
          title="Hotel El Buen Vivir"
          text="Explora nuestras habitaciones y servicios exclusivos diseñados para tu máximo confort.Somos un hotel 
        con presencia en diversas ciudades de Colombia, incluyendo Santa Marta, Cali, Medellín, Bogotá, Cartagena 
        y Bucaramanga, entre otras. Con más de 40 años de experiencia en el sector hotelero, nos esforzamos 
        por ofrecer una experiencia única, segura e inolvidable."
        />
        <ImagenCentro src={hotel5estrellas} />
        <TituloTexto
          classTitle="text-title text-title-center"
          title="Reserva ahora"
          text="Cada detalle es cuidadosamente pensado para hacer de tu estadía un momento especial, lleno de comodidad y calidez. Nuestra misión es brindarte un ambiente acogedor, lleno de tranquilidad y placer, donde puedas disfrutar de un verdadero descanso. Ven y déjanos ser parte de tus momentos más memorables. ¡Te esperamos!"
        />
        <ImagenCentro src={piscinaHotel} />
      </main>
    </>
  )
}
