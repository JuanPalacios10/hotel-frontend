import Header from './Header'
import PanelSecciones from './PanelSecciones'
import allImg from '../../assets/images/inicio/All inclusive.webp'
import showImg from '../../assets/images/inicio/show.webp'
import piscinaImg from '../../assets/images/inicio/Piscinas.webp'
import marImg from '../../assets/images/inicio/Vista al mar.webp'
import '../../styles/inicio.css'

function Inicio() {
  return (
    <>
      <Header />
      <aside className="servicios">
        <div className="servicios__item">
          <img src={allImg} alt="all inclusive" className="servicios__item__icon" />
          <span className="servicios__item__text">Todo incluido / All inclusive</span>
        </div>
        <div className="servicios__item">
          <img src={showImg} alt="all inclusive" className="servicios__item__icon" />
          <span className="servicios__item__text">Show nocturnos</span>
        </div>
        <div className="servicios__item">
          <img src={piscinaImg} alt="all inclusive" className="servicios__item__icon" />
          <span className="servicios__item__text">Piscina</span>
        </div>
        <div className="servicios__item">
          <img src={marImg} alt="all inclusive" className="servicios__item__icon" />
          <span className="servicios__item__text">Habitaciones vista al mar</span>
        </div>
      </aside>
      <main>
        <section className="bienvenida">
          <h4 className="bienvenida__title bienvenida__title--bold">Su casa en San Andrés</h4>
          <h4 className="bienvenida__title">Hotel Buen Vivir</h4>
          <p className="bienvenida__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis sint impedit unde
            veritatis consequatur hic obcaecati dolore repellendus temporibus quos, soluta dolores
            neque amet voluptatibus blanditiis adipisci at tempora.
          </p>
        </section>
        <PanelSecciones />
      </main>
    </>
  )
}

export default Inicio
