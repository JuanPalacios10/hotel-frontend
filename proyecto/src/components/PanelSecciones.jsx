import { panel } from '../styles/panelSecciones.module.css'

export function PanelSecciones({ children }) {
  return <section className={panel}>{children}</section>
}
