import { logo__img } from '../styles/logo.module.css'

export function Logo({ logoImg, className = logo__img, children }) {
  return (
    <div>
      <img src={logoImg} className={className} alt="Logo" />
      {children}
    </div>
  )
}
