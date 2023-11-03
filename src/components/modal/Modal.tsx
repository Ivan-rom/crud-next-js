import { FC, PropsWithChildren } from 'react'
import './modal.scss'

type Props = {
  closeModal: () => void
}

const Modal: FC<PropsWithChildren<Props>> = ({ children, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={closeModal}></div>
      <div className="modal__content">{children}</div>
    </div>
  )
}

export default Modal
