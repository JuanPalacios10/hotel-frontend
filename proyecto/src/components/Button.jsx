import { btn } from '../styles/button.module.css'

export function Button({ className, children, handleClick }) {
  const styles = className ? `${btn} ${className}` : btn

  return (
    <button type="button" className={styles} onClick={handleClick}>
      {children}
    </button>
  )
}
