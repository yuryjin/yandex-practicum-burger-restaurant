import React from 'react'
import styles from './styles/ingredient-details-info-block.module.scss'

const IngredientDetailsInfoBlock = ({ children }) => {
  return (
    <div className={`${styles.layout} pt-8`}>
        {children}
    </div>
  )
}

export default IngredientDetailsInfoBlock