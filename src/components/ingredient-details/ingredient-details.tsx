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

                <div className={`${styles.layout} pt-8`}>
                    <div className={styles.infoitem}>
                        <p className={`text text_type_main-small ${styles.text}`}>Калории,ккал</p>
                        <p className={`text text_type_main-small ${styles.text} mt-2`}>{ingredient?.calories}</p>
                    </div>

                    <div className={styles.infoitem}>
                        <p className={`text text_type_main-small ${styles.text}`}>Белки, г</p>
                        <p className={`text text_type_main-small ${styles.text} mt-2`}>{ingredient?.proteins}</p>
                    </div>
                    
                    <div className={styles.infoitem}>
                        <p className={`text text_type_main-small ${styles.text}`}>Жиры, г</p>
                        <p className={`text text_type_main-small ${styles.text} mt-2`}>{ingredient?.fat}</p>
                    </div>

                    <div className={styles.infoitem}>
                        <p className={`text text_type_main-small ${styles.text}`}>Углеводы, г</p>
                        <p className={`text text_type_main-small ${styles.text} mt-2`}>{ingredient?.carbohydrates}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IngredientDetails