import React from 'react'
import ConstructorElementEmpty from '../ui/ConstructorElementEmpty'
import styles from './styles/burger-constructor.module.scss'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructorIngredientsList = ({ ingredients }) => {

    if (ingredients && ingredients.length > 0) {
        return (
            <div className={`${styles.ingredients} mt-4`}>
                {
                    ingredients.map((ingredient) => {
                        return (
                            // <ConstructorElementEmpty
                            //     text='Пожалуйста, выберите булку для вашего бургера'
                            //     extraClass='ml-10 mt-4'
                            // />
                            <div className={`${styles.BurgerConstructorItem} pb-4`}>
                                <DragIcon type="primary" />
                
                                <ConstructorElement
                                    text={ingredient.name}
                                    price={ingredient.price}
                                    thumbnail={ingredient.image}
                                    extraClass={`mt-0 ml-1`}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
        // <ConstructorElementEmpty
        //     text='Пожалуйста, выберите булку для вашего бургера'
        //     extraClass='ml-10 mt-4'
        // />
    } 
    
    return (
        <ConstructorElementEmpty
            text='Пожалуйста, выберите булку для вашего бургера'
            extraClass='ml-10 mt-4 mb-4'
        />
    )
    
    // else {

    // }


//   return (
//     <div>BurgerConstructorIngredientsList</div>
//   )
}

export default BurgerConstructorIngredientsList