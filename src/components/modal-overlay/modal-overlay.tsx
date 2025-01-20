import styles from './styles/modal-overlay.module.scss'
import React from 'react';

const ModalOverlay: React.FC<{
  onClose: () => void,
}> = ({ 
  onClose 
}) => {
  return (
    <div className={styles.overlay} onClick={onClose}></div>
  )
}

export default ModalOverlay