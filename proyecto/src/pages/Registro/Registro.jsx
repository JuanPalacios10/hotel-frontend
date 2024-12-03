import { useState } from 'react'
import { FormLayout } from '../../components/FormLayout'
import { FormGroup } from '../../components/FormGroup'
import { InputForm } from '../../components/InputForm'
import { ButtonForm } from '../../components/ButtonForm'
import { iniciarSesion } from '../../styles/registro.module.css'

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
      <FormLayout
        title="Registro"
        subtitle="Regístrese ahora y obtenga acceso completo a nuestros servicios."
      >
        <FormGroup>
          <InputForm
            type="text"
            placeholder="Nombres"
            name="nombres"
            handleChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <InputForm
            type="text"
            placeholder="Apellidos"
            name="apellidos"
            handleChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <InputForm
            type="text"
            placeholder="Telefono"
            name="telefono"
            handleChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <InputForm
            type="email"
            placeholder="Email"
            name="email"
            handleChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <InputForm
            type="password"
            placeholder="Contraseña"
            name="contraseña"
            handleChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <InputForm
            type="password"
            placeholder="Confirmar contraseña"
            name="confirmarContraseña"
            handleChange={handleInputChange}
          />
        </FormGroup>
        <ButtonForm>Registrarme</ButtonForm>
        <span className={iniciarSesion}>
          Ya tienes una cuenta ? <a href="#">iniciar sesion</a>
        </span>
      </FormLayout>
    </form>
  )
}
