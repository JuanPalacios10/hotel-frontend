import { formLayout, titulo, subtitulo } from '../styles/formLayout.module.css'

export function FormLayout({ title, subtitle, children }) {
  return (
    <div className={formLayout}>
      <h2 className={titulo}>{title}</h2>
      <h3 className={subtitulo}>{subtitle}</h3>
      {children}
    </div>
  )
}
