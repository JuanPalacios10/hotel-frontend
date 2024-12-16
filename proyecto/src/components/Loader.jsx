import { svg, circle } from '../styles/loader.module.css'

export function Loader() {
  return (
    <svg className={svg} viewBox="25 25 50 50">
      <circle className={circle} r={20} cy={50} cx={50} />
    </svg>
  )
}
