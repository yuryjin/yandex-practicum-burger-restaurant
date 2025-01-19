import React from 'react'
import { createPortal } from 'react-dom'
import styles from './styles/modal.module.scss'
import ModalOverlay from '../modal-overlay/modal-overlay'

const Modal = ({ open, children, onClose }) => {
    if (!open) return null

    return createPortal(
      <>
        <div className={styles.modal}>
          {/* <button onClick={onClose}>Close Modal</button> */}
          {children}
        </div>
        <ModalOverlay onClose={() => onClose()} />
      </>,
      document.getElementById('portal')
    )
}

export default Modal