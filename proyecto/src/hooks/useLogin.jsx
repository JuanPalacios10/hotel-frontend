import { useState } from 'react'
import { login } from '../services/login'
import { useUserContext } from '../context/UserContext'

export function useLogin() {
  const { setLogin } = useUserContext()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const makeLogin = async (data) => {
    try {
      setLoading(true)
      const res = await login(data)

      if (res.status === 200) {
        setError(null)
        setLogin({
          user: res.data?.username,
          token: res.data?.access
        })
      }
    } catch (err) {
      console.log(err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    makeLogin
  }
}
