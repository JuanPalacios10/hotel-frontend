import { createContext, useContext, useState } from 'react'

export const modalContext = createContext()

export function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(null)

  const openModal = (modalId) => setModal(modalId)

  return (
    <modalContext.Provider value={{ modal, setModal, openModal }}>{children}</modalContext.Provider>
  )
}

export const useModalContext = () => {
  const context = useContext(modalContext)
  if (!context) {
    throw new Error('useModalContext must be used within a ModalContextProvider')
  }

  return context
}
