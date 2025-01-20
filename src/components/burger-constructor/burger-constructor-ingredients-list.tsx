import ConstructorElementEmpty from '../ui/ConstructorElementEmpty'
import styles from './styles/burger-constructor.module.scss'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import { Ingredient } from '../../../types/types'

const BurgerConstructorIngredientsList: React.FC<{
    ingredients: Ingredient[];
}> = ({ ingredients }) => {
    if (ingredients && ingredients.length > 0) {
        return (
            <div className={`${styles.ingredients} mt-4`}>
                {
                    ingredients.map((ingredient, index: number) => {
                        return (
                            <div className={`${styles.BurgerConstructorItem} pb-4`} key={`${ingredient._id}${index}`}>
                                <DragIcon type="primary" />
                
                                <ConstructorElement
                                    text={String(ingredient.name)}
                                    price={Number(ingredient.price)}
                                    thumbnail={String(ingredient.image)}
                                    extraClass={`mt-0 ml-1`}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    } 
    
    return (
        <ConstructorElementEmpty
            text='Пожалуйста, выберите булку для вашего бургера'
            extraClass='ml-10 mt-4 mb-4'
        />
    )
}

export default BurgerConstructorIngredientsList