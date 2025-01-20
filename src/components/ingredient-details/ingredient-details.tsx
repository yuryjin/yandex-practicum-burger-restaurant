import React from 'react'
import styles from './styles/ingredient-details.module.scss'
import IngredientDetailsInfoBlock from './ingredient-details-info-block'
import IngredientDetailsInfoItem from './ingredient-details-info-item'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import { Ingredient } from '../../../types/types'

const IngredientDetails: React.FC<{
    ingredient: Ingredient | null;
    onClose: () => void;
}> = ({ 
    ingredient, 
    onClose
}) => {
  return (
    <div className={`${styles.wrapper}`}>
        <div className={`${styles.card} p-10 pb-15`}>
            <header className={styles.header}>
                <h2 className='text text_type_main-large'>Детали ингредиента</h2>
                <CloseIcon type="primary" onClick={onClose} />
            </header>
            
            <div className={styles.info}>
                <img className={styles.productImage} src={String(ingredient?.image)} alt={String(ingredient?.name ? ingredient?.name : 'Изображение ингредиента')}></img>
                <h4 className="text text_type_main-medium pt-4 m-0">{ingredient?.name}</h4>

                <IngredientDetailsInfoBlock>
                    <IngredientDetailsInfoItem text="Калории,ккал" value={ingredient?.calories} />
                    <IngredientDetailsInfoItem text="Белки, г" value={ingredient?.proteins} />
                    <IngredientDetailsInfoItem text="Жиры, г" value={ingredient?.fat} />
                    <IngredientDetailsInfoItem text="Углеводы, г" value={ingredient?.carbohydrates} />
                </IngredientDetailsInfoBlock>

            </div>
        </div>
    </div>
  )
}

export default IngredientDetails