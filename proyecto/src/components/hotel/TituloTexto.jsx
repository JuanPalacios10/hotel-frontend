import '../../styles/TituloTexto.css'

const TituloTexto = ({ title, text, classTitle }) => {
  return (
    <div className="TituloTexto" >
      <h2 className= {classTitle}>{title}</h2>
      <p className="text-body">{text}</p>
    </div>
  )
}

export default TituloTexto
