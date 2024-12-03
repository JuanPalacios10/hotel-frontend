import { logo__img } from '../styles/logo.module.css'

export function Logo({ logoImg, children }) {
  return (
    <div>
      <img src={logoImg} className={logo__img} alt="Logo" />
      {children}
    </div>
  )
}
