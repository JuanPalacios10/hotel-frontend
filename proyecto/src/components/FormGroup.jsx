import { formGroup } from '../styles/formGroup.module.css'

export function FormGroup({ children }) {
  return <div className={formGroup}>{children}</div>
}
