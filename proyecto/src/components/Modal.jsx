import { createPortal } from 'react-dom'
import { useModalContext } from '../context/ModalContext'
import '../styles/modal.css'

export function Modal({ children }) {
  const { modal, setModal } = useModalContext()

  const closeModal = () => setModal(false)

  if (!modal) return

  return createPortal(
    <div className="modal">
      <div className="overlay" onClick={closeModal}>
        {children}
        <button onClick={closeModal}>Cerrar modal</button>
      </div>
    </div>,
    document.getElementById('modal')
  )
}
