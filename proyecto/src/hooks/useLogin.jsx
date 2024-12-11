import { useState } from 'react'
import { login } from '../services/login'

export function useLogin() {
  const [form, setForm] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const makeLogin = async (data) => {
    try {
      setLoading(true)
      const res = await login(data)
      setForm(res)
    } catch (err) {
      setError(err)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    form,
    loading,
    error,
    makeLogin
  }
}
