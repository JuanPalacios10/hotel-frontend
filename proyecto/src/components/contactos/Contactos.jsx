import Header from '../inicio/Header';
import TituloTexto from './TituloTexto';
import ImagenCentro from './ImagenCentro';
import contactos from '../../assets/images/contactos.jpg';

function Contactos() {
  return (
    <>
      <Header title="Contactos" />
      <main>
        <TituloTexto
          title="Contáctanos"
          text="Estamos a sus órdenes, listos para responder cualquier duda o bien, para asistirle en reservar sus 
          próximos viajes o eventos. Llámenos o envíenos un correo electrónico, será un placer ayudarle."
        />
        <ImagenCentro src={contactos} className="imagen-horizontal" />
      </main>
    </>
  )
}

export default Contactos;
