import { createPortal } from 'react-dom'
import styles from './styles/modal.module.scss'
import ModalOverlay from '../modal-overlay/modal-overlay'
import React, { ReactNode } from 'react';

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