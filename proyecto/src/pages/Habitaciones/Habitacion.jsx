import { ImagenyTexto } from '../../components/ImagenyTexto';
import sencilla from '../../assets/images/habitaciones/sencilla.jpg';
import doble from '../../assets/images/habitaciones/doble.jpg';
import triple from '../../assets/images/habitaciones/triple.jpg';
import familiar from '../../assets/images/habitaciones/familiar.jpg';
import { Banner } from '../../components/Banner';
import hhabitaciones from '../../assets/images/habitaciones/hhabitaciones.jpg';

export function Habitaciones() {
  return (
    <div>
      <Banner imgUrl={hhabitaciones}>HABITACIONES</Banner>
      <main>
        <ImagenyTexto
          title="Habitación Sencilla"
          text="Esta habitación, con opción de vista interior o al mar, está equipada con una cama sencilla, aire acondicionado, TV por cable y acceso a internet. Además, cuenta con un baño privado con ducha y artículos de aseo de cortesía."
          imgSrc={sencilla}
        />
        <ImagenyTexto
          title="Habitación Doble"
          text="Esta habitación, con vista al mar o interior, cuenta con una cama doble o dos camas sencillas, TV por cable, aire acondicionado y acceso a internet. Además, dispone de un baño privado con ducha y artículos de aseo de cortesía"
          imgSrc={doble}
          reverse={true}
        />
        <ImagenyTexto
          title="Habitación Triple"
          text="Esta habitación, disponible con vista interior o al mar, ofrece la opción de una cama doble y una cama sencilla, o bien tres camas sencillas. Está equipada con aire acondicionado, TV por cable, acceso a internet y un baño privado con ducha. También incluye artículos de aseo de cortesía."
          imgSrc={triple}
        />
        <ImagenyTexto
          title="Habitación Familiar"
          text="Esta habitación, con vista interior o al mar, está diseñada especialmente para familias o grupos de amigos. Ofrece la opción de dos camas dobles o cuatro camas sencillas. Cuenta con aire acondicionado, TV por cable, acceso a internet y dos baño privados con ducha, además de artículos de aseo de cortesía"
          imgSrc={familiar}
          reverse={true}
        />
      </main>
    </div>
  );
}
