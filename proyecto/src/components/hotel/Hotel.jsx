import Header from '../inicio/Header'
import TituloTexto from './TituloTexto'
import ImagenCentro from './ImagenCentro'
import hotel5estrellas from '../../assets/images/h5estrellas.jpg'
import piscinaHotel from '../../assets/images/piscinahotel.jpg'

function Hotel() {
  return (
    <>
      <Header title="El Hotel" />
      <main>
        <TituloTexto
          title="Hotel El Buen Vivir"
          text="Explora nuestras habitaciones y servicios exclusivos diseñados para tu máximo confort.Somos un hotel 
        con presencia en diversas ciudades de Colombia, incluyendo Santa Marta, Cali, Medellín, Bogotá, Cartagena 
        y Bucaramanga, entre otras. Con más de 40 años de experiencia en el sector hotelero, nos esforzamos 
        por ofrecer una experiencia única, segura e inolvidable."
        />
        <ImagenCentro src={hotel5estrellas} />
        <TituloTexto
          title="Reserva ahora"
          text="Cada detalle es cuidadosamente pensado para hacer de tu estadía un momento especial, lleno de comodidad y calidez. Nuestra misión es brindarte un ambiente acogedor, lleno de tranquilidad y placer, donde puedas disfrutar de un verdadero descanso. Ven y déjanos ser parte de tus momentos más memorables. ¡Te esperamos!"
        />
        <ImagenCentro src={piscinaHotel} />
      </main>
    </>
  )
}

export default Hotel
