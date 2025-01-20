import React, { ReactNode } from 'react'
import styles from './styles/ingredient-details-info-block.module.scss'

const IngredientDetailsInfoBlock: React.FC<{
  children: ReactNode;
}> = ({ 
  children
}) => {
  return (
    <div className={`${styles.layout} pt-8`}>
        {children}
    </div>
  )
}

export default IngredientDetailsInfoBlock