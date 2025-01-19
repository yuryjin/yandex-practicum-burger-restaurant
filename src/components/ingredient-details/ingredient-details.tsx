import React from 'react'
import styles from './styles/ingredient-details.module.scss'

const IngredientDetails = () => {
  return (
    <div className={`${styles.wrapper}`}>
        <div className={`${styles.card} p-10 pb-15`}>
            <h2 className='text text_type_main-large'>Детали ингредиента</h2>
        </div>
        {/* Детали ингредиента */}
    </div>
  )
}

export default IngredientDetails