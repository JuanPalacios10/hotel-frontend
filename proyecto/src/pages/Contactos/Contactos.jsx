import { Banner } from '../../components/Banner'
import { TituloTexto } from '../../components/TituloTexto'
import { ImagenCentro } from '../../components/ImagenCentro'
import contactos from '../../assets/images/contactos/contactos.jpg'
import hcontactos from '../../assets/images/contactos/hcontactos.jpg'
export function Contactos() {
  return (
    <>
      <Banner imgUrl={hcontactos}>Contactos</Banner>
      <main>
        <TituloTexto
          classTitle="text-title text-title-center"
          title="Contáctanos"
          text="Estamos a sus órdenes, listos para responder cualquier duda o bien, para asistirle en reservar sus 
          próximos viajes o eventos. Llámenos o envíenos un correo electrónico, será un placer ayudarle."
        />
        <ImagenCentro src={contactos} className="imagen-horizontal" />
      </main>
    </>
  )
}
