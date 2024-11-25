import '../styles/imagencentro.css'

export const ImagenCentro = ({ src, className = '' }) => {
  return (
    <div className={`imagen-centro ${className}`}>
      <img src={src} />
    </div>
  )
}
