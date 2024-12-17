import { createPortal } from 'react-dom'
import { useModalContext } from '../context/ModalContext'
import { overlay } from '../styles/modal.module.css'

export function Modal({ modalId, children }) {
  const { modal, closeModal } = useModalContext()
  const modalRoot = document.getElementById('modal')

  const handleContentClick = (event) => {
    event.stopPropagation()
  }

  if (modal !== modalId || !modalRoot) return null

  return createPortal(
    <div className={overlay} onClick={closeModal}>
      <div onClick={handleContentClick}>{children}</div>
    </div>,
    modalRoot
  )
}
