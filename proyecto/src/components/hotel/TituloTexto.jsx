import '../../styles/TituloTexto.css'

const TituloTexto = ({ title, text }) => {
  return (
    <div className="TituloTexto">
      <h2 className="text-title">{title}</h2>
      <p className="text-body">{text}</p>
    </div>
  )
}

export default TituloTexto
