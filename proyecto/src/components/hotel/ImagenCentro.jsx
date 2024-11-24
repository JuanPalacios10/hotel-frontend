import '../../styles/imagencentro.css'

const ImagenCentro = ({ src, className = "" }) => {
  return (
    <div className={`imagen-centro ${className}`}>
      <img src={src} />
    </div>
  )
}

export default ImagenCentro
