import { createPortal } from 'react-dom'
import { useModalContext } from '../context/ModalContext'
import '../styles/modal.css'

export function Modal({ children }) {
  const { modal, setModal } = useModalContext()
  const modalRoot = document.getElementById('modal')

  const closeModal = () => {
    setModal(false)
  }

  const handleContentClick = (event) => {
    event.stopPropagation()
  }

  if (!modal || !modalRoot) return

  return createPortal(
    <div className="overlay" onClick={closeModal}>
      <div className="modal" onClick={handleContentClick}>
        {children}
      </div>
    </div>,
    modalRoot
  )
}