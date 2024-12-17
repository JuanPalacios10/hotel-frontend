import { createContext, useContext, useState } from 'react'
import { initialState } from '../constants/userState'

const userContext = createContext()

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(initialState)

  return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>
}

export function useUserContext() {
  const context = useContext(userContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }

  return context
}
