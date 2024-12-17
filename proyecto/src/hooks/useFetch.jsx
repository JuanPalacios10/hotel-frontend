import { useState } from 'react'

export function useFetch(apiCall) {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const makeCall = async (data = null) => {
    try {
      setLoading(true)
      setError(null)
      const res = await apiCall(data)

      if (res.status === 200) {
        setResponse(res.data)
      }
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    response,
    loading,
    error,
    makeCall
  }
}
