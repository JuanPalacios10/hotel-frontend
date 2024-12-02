import { ButtonForm } from '../../components/ButtonForm'
import { FormGroup } from '../../components/FormGroup'
import { FormLayout } from '../../components/FormLayout'
import { InputForm } from '../../components/InputForm'
import styled from '../../styles/login.module.css'

export function Login() {
  const { recuperarContraseña, registrarse } = styled

  return (
    <form className="form">
      <FormLayout
        title="Iniciar Sesión"
        subtitle="Inicia sesión para acceder a todas las posibilades que ofrece nuestro hotel!."
      >
        <FormGroup>
          <InputForm type="text" placeholder="Usuario" />
        </FormGroup>
        <FormGroup>
          <InputForm type="password" placeholder="Contraseña" />
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
  )
}
