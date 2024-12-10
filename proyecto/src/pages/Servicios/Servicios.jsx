import { useState } from "react";
import { ImagenyTexto } from "../../components/ImagenyTexto";
import hservicios from "../../assets/images/servicios/hservicios.jpg";
import { Banner } from "../../components/Banner";
import styles from "../../styles/servicios.module.css";
import sbar from "../../assets/images/servicios/sbar.jpg";
import spiscina from "../../assets/images/servicios/spiscina.jpg";
import sparque from "../../assets/images/servicios/sparque.jpg";
import srestaurante from "../../assets/images/servicios/srestaurante.jpg";

const servicios = {
  parque: {
    title: "Parque Infantil",
    text: "Un espacio seguro y divertido para los más pequeños. Entretenimiento para los más pequeños, el parque infantil brinda a los niños un lugar seguro y lleno de diversión dentro del hotel.",
    imgSrc: sparque,
  },
  piscina: {
    title: "Piscina",
    text: "Relájate en nuestra piscina con áreas para adultos y niños. Disfruta de un refrescante baño en nuestra piscina. Si necesitas toallas, no dudes en solicitarlas en recepción. Relájate bajo el sol y disfruta de un momento de descanso",
    imgSrc: spiscina,
  },
  restaurante: {
    title: "Restaurante",
    text: "Disfruta de una gastronomía exquisita con ingredientes locales. Disfrute en nuestro restaurante de una excelente fusión de comida típica isleña, platos nacionales e internacionales, todo en un ambiente cómodo y acogedor.",
    imgSrc: srestaurante,
  },
  bar: {
    title: "Bar",
    text: "Relájate con una gran variedad de bebidas en un ambiente acogedor. Ya sea para un brindis con amigos o una tarde tranquila, te ofrecemos un ambiente acogedor y exclusivo para que cada momento sea especial.",
    imgSrc: sbar,
  },
};

export function Servicios() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState("parque");

  const handleClick = (servicio) => {
    setServicioSeleccionado(servicio);
  };

  return (
    <>
      <Banner imgUrl={hservicios}>SERVICIOS</Banner>
      <main>
        <div className={styles.servicios}>
          <div className={styles.botones}>
            {Object.keys(servicios).map((servicio) => (
              <button
                key={servicio}
                onClick={() => handleClick(servicio)}
                className={
                  servicio === servicioSeleccionado ? styles.activo : ""
                }
              >
                {servicios[servicio].title}
              </button>
            ))}
          </div>
          <div className={styles.contenido}>
            <ImagenyTexto
              title={servicios[servicioSeleccionado].title}
              text={servicios[servicioSeleccionado].text}
              imgSrc={servicios[servicioSeleccionado].imgSrc}
              alt={servicios[servicioSeleccionado].alt}
            />
          </div>
        </div>
      </main>
    </>
  );
}
