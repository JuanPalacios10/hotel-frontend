import { useState } from 'react'
import '../../styles/formulario.css'

export const Registro = () => {
  const [datos, setDatos] = useState({
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    contraseña: '',
    confirmarContraseña: ''
  })

  const handleInputChange = (evento) => {
    setDatos({
      ...datos,
      [evento.target.name]: evento.target.value
    })
  }

  const enviarDatos = (evento) => {
    evento.preventDefault()
    console.log(
      datos.nombres +
        ' ' +
        datos.apellidos +
        ' ' +
        datos.telefono +
        ' ' +
        datos.email +
        ' ' +
        datos.contraseña +
        ' ' +
        datos.confirmarContraseña +
        ' '
    )
  }

  return (
    <form className="cuadro" onSubmit={enviarDatos}>
      <p className="titulo">Registro</p>
      <p className="subtitulo">Regístrese ahora y obtenga acceso completo a nuestros servicios.</p>
      <div className="datos">
        <input
          placeholder="Nombres"
          className="form-control"
          type="text"
          name="nombre"
          onChange={handleInputChange}
        />
      </div>
      <div className="datos">
        <input
          placeholder="Apellidos"
          className="form-control"
          type="text"
          name="apellido"
          onChange={handleInputChange}
        />
      </div>
      <div className="datos">
        <input
          placeholder="Telefono"
          className="form-control"
          type="text"
          name="telefono"
          onChange={handleInputChange}
        />
      </div>
      <div className="datos">
        <input
          placeholder="Email"
          className="form-control"
          type="email"
          name="email"
          onChange={handleInputChange}
        />
      </div>
      <div className="datos">
        <input
          placeholder="Contraseña"
          className="form-control"
          type="contraseña"
          name="contraseña"
          onChange={handleInputChange}
        />
      </div>
      <div className="datos">
        <input
          placeholder="Confirmar contraseña"
          className="form-control"
          type="contraseña"
          name="confirmarPassword"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn-registrarme">
        Registrarme
      </button>
      <p className="iniciar-sesion">
        Ya tines una cuenta ? <a href="#">iniciar sesion</a>{' '}
      </p>
    </form>
  )
}
