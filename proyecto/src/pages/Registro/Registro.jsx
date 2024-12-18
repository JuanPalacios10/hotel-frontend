import { useEffect, useState } from 'react'
import { FormLayout } from '../../components/FormLayout'
import { FormGroup } from '../../components/FormGroup'
import { InputForm } from '../../components/InputForm'
import { ButtonForm } from '../../components/ButtonForm'
import { iniciarSesion } from '../../styles/registro.module.css'
import { register } from '../../services/register'
import { useFetch } from '../../hooks/useFetch'
import { Loader } from '../../components/Loader'
import { ErrorCard } from '../../components/ErrorCard'
import { useModalContext } from '../../context/ModalContext'

export const Registro = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: '',
    contraseña: '',
    confirmarContraseña: ''
  })
  const { response, loading, error, makeCall } = useFetch(register)
  const { closeModal } = useModalContext()

  const handleInputChange = (evento) => {
    setDatos({
      ...datos,
      [evento.target.name]: evento.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault()

    const data = { ...datos }
    delete data.confirmarContraseña
    makeCall(data)
  }

  useEffect(() => {
    if (!response) return

    closeModal()
  }, [response, closeModal])

  if (loading) return <Loader />

  return (
    <>
      <form onSubmit={enviarDatos}>
        <FormLayout
          title="Registro"
          subtitle="Regístrese ahora y obtenga acceso completo a nuestros servicios."
        >
          <FormGroup>
            <InputForm
              type="text"
              placeholder="Nombre"
              name="nombre"
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
              type="text"
              placeholder="Telefono"
              name="telefono"
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
            Ya tienes una cuenta? <a href="#">Iniciar sesion</a>
          </span>
        </FormLayout>
      </form>
      <ErrorCard error={error} />
    </>
  )
}
