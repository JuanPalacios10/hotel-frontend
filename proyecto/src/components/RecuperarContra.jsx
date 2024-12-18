import { useFetch } from '../hooks/useFetch'
import { ButtonForm } from './ButtonForm'
import { FormGroup } from './FormGroup'
import { FormLayout } from './FormLayout'
import { InputForm } from './InputForm'
import { recuperarContra } from '../services/recuperarContra'
import { Loader } from './Loader'
import { ErrorCard } from './ErrorCard'
import { useEffect } from 'react'
import { useModalContext } from '../context/ModalContext'

export function RecuperarContra() {
  const { response, loading, error, makeCall } = useFetch(recuperarContra)
  const { closeModal } = useModalContext()

  const handleSubmit = (event) => {
    event.preventDefault()

    const datos = Object.fromEntries(new FormData(event.target))
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
      <form onSubmit={handleSubmit}>
        <FormLayout
          title="Recuperar Contraseña"
          subtitle="Ingresa tu correo electronico para recuperar tu contraseña."
        >
          <FormGroup>
            <InputForm type="email" placeholder="Correo electronico" name="correo" />
          </FormGroup>
          <FormGroup>
            <InputForm type="password" placeholder="Nueva contraseña" name="nuevaContraseña" />
          </FormGroup>
          <FormGroup>
            <InputForm
              type="password"
              placeholder="Confirmar contraseña"
              name="confirmarContraseña"
            />
          </FormGroup>
          <ButtonForm>Recuperar contraseña</ButtonForm>
        </FormLayout>
      </form>
      <ErrorCard error={error} />
    </>
  )
}
