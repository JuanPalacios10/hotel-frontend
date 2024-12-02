import { btnForm } from '../styles/buttonForm.module.css'

export function ButtonForm({ children, handleCLick }) {
  return (
    <button type="submit" className={btnForm} onClick={handleCLick}>
      {children}
    </button>
  )
}
