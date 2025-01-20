import { createPortal } from 'react-dom'
import styles from './styles/modal.module.scss'
import ModalOverlay from '../modal-overlay/modal-overlay'
import React, { ReactNode, useEffect } from 'react';

const portalDiv = document.getElementById('portal')!;



const Modal: React.FC<{
    open: Boolean;
    children: ReactNode,
    onClose: () => void,
}> = ({ 
  open, 
  children, 
  onClose 
}) => {
    useEffect(() => {
      const close = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.keyCode === 27 || e.key === 'Escape'){
          onClose()
        }
      }
      window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[])

    if (!open) return null

    return createPortal(
      <>
        <div className={styles.modal}>
          {children}
        </div>
        <ModalOverlay onClose={() => onClose()} />
      </>,
      portalDiv
    )
}

export default Modal