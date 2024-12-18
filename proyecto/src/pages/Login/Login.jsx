import { ButtonForm } from '../../components/ButtonForm'
import { FormGroup } from '../../components/FormGroup'
import { FormLayout } from '../../components/FormLayout'
import { InputForm } from '../../components/InputForm'
import { recuperarContrasena, btnLink } from '../../styles/login.module.css'
import { useFetch } from '../../hooks/useFetch'
import { Loader } from '../../components/Loader'
import { ErrorCard } from '../../components/ErrorCard'
import { login } from '../../services/login'
import { useModalContext } from '../../context/ModalContext'
import { useUserContext } from '../../context/UserContext'
import { useEffect } from 'react'

export function Login() {
  const { closeModal, openModal } = useModalContext()
  const { setUser } = useUserContext()
  const { response, loading, error, makeCall } = useFetch(login)

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = Object.fromEntries(new FormData(event.target))
    makeCall(data)
  }

  useEffect(() => {
    if (!response) return

    const data = {
      username: response.username,
      token: response.access
    }

    setUser(data)
    window.localStorage.setItem('user', JSON.stringify(data))
    closeModal()
  }, [response, closeModal, setUser])

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
          <span className={recuperarContrasena}>
            No recuerdas tu contraseña?{' '}
            <button
              type="button"
              className={btnLink}
              onClick={() => openModal('recuperar-contraseña')}
            >
              Recuperar contraseña
            </button>
          </span>
          <ButtonForm>Iniciar Sesión</ButtonForm>
        </FormLayout>
      </form>
      <ErrorCard error={error} />
    </>
  )
}
