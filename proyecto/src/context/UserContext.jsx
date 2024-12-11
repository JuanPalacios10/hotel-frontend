import { createContext, useContext, useState } from 'react'

const userContext = createContext()

const initialState = {
  user: null,
  token: null
}

export function UserContextProvider({ children }) {
  const [login, setLogin] = useState(initialState)

  return <userContext.Provider value={{ login, setLogin }}>{children}</userContext.Provider>
}

export function useUserContext() {
  const context = useContext(userContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }

  return context
}
