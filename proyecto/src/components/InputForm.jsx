import { input } from '../styles/inputForm.module.css'

export function InputForm({ placeholder, type, name, handleChange, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={input}
      onChange={handleChange}
      {...props}
    />
  )
}
