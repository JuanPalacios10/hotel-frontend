import { listBox } from '../styles/profileCard.module.css'

export function ProfileCard({ children }) {
  return <ul className={listBox}>{children}</ul>
}
