import {
  bienvenida,
  bienvenida__title,
  bienvenida__titleBold,
  bienvenida__info
} from '../styles/bienvenida.module.css'

export function Bienvenida({ children }) {
  return (
    <section className={bienvenida}>
      <h4 className={`${bienvenida__title} ${bienvenida__titleBold}`}>Su casa en San Andrés</h4>
      <h5 className={bienvenida__title}>Hotel Buen Vivir</h5>
      <p className={bienvenida__info}>{children}</p>
    </section>
  )
}
