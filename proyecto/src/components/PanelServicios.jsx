import { servicios } from '../styles/panelServicios.module.css'

export function PanelServicios({ children }) {
  return <aside className={servicios}>{children}</aside>
}
