import { ButtonForm } from '../../components/ButtonForm'
import { FormGroup } from '../../components/FormGroup'
import { FormLayout } from '../../components/FormLayout'
import { InputForm } from '../../components/InputForm'
import styled from '../../styles/login.module.css'
import { useLogin } from '../../hooks/useLogin'
import { Loader } from '../../components/Loader'
import { ErrorCard } from '../../components/ErrorCard'

export function Login() {
  const { recuperarContraseña, registrarse } = styled
  const { loading, error, makeLogin } = useLogin()

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = Object.fromEntries(new FormData(event.target))
    makeLogin(data)
  }

  if (loading) return <Loader />

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormLayout
          title="Iniciar Sesión"
          subtitle="Inicia sesión para acceder a todas las posibilades que ofrece nuestro hotel!."
        >
          <FormGroup>
            <InputForm type="text" placeholder="Usuario" name="usuario" />
          </FormGroup>
          <FormGroup>
            <InputForm type="password" placeholder="Contraseña" name="contraseña" />
          </FormGroup>
          <span className={recuperarContraseña}>
            No recuerdas tu contraseña? <a href="#">Recuperar contraseña</a>
          </span>
          <ButtonForm>Iniciar Sesión</ButtonForm>
          <span className={registrarse}>
            No tienes una cuenta? <a href="#">Registrarse</a>
          </span>
        </FormLayout>
      </form>
      {error && (
        <ErrorCard title={error.response?.data?.detail ?? 'Error'} message={error.message} />
      )}
    </>
  )
}
