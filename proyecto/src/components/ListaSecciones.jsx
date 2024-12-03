import { listaSecciones } from '../styles/listaSecciones.module.css'

export function ListaSecciones({ children }) {
  return (
    <nav>
      <ul className={listaSecciones}>{children}</ul>
    </nav>
  )
}
