import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './styles/order-details.module.scss'
// import { ReactComponent as OrderDoneIcon } from '../../images/order-done-icon.svg';
// import { default as orderdoneicon } from '../../images/order-done-icon.svg';
// import orderdoneicon from '../../images/order-done-icon.png';
import orderdoneicon from '../../images/graphics.png';

const OrderDetails = ({ onClose }) => {
  return (
    <div className={`${styles.wrapper}`}>
        <div className={`${styles.card}`}>
            <header className={styles.header}>
                <CloseIcon type="primary" onClick={onClose} />
            </header>
            
            {/* {JSON.stringify(ingredient, null, 2)} */}
            <div className={styles.info}>

                <p className="text text_type_digits-large pt-30">034536</p>
                <p className="text text_type_main-medium pt-8">идентификатор заказа</p>

                <img src={orderdoneicon} alt="Заказ успешно оформлен" className={`${styles.icon} pt-15`} />

                <h4 className="text text_type_main-small pt-15">Ваш заказ начали готовить</h4>
                <h5 className="text text_type_main-small text_color_inactive pt-2 pb-30">Дождитесь готовности на орбитальной станции</h5>


                {/* <OrderDoneIcon /> */}

                {/* <img className={styles.productImage} src={ingredient.image}></img>
                <h4 className="text text_type_main-medium pt-4 m-0">{ingredient.name}</h4> */}


                {/* <IngredientDetailsInfoBlock>
                    <IngredientDetailsInfoItem text="Калории,ккал" value={ingredient.calories} />
                    <IngredientDetailsInfoItem text="Белки, г" value={ingredient.proteins} />
                    <IngredientDetailsInfoItem text="Жиры, г" value={ingredient.fat} />
                    <IngredientDetailsInfoItem text="Углеводы, г" value={ingredient.carbohydrates} />
                </IngredientDetailsInfoBlock> */}

            </div>
        </div>
        {/* Детали ингредиента */}
    </div>
  )
}

export default OrderDetails

// import React from 'react'
// import styles from './styles/ingredient-details.module.scss'
// import IngredientDetailsInfoBlock from './ingredient-details-info-block'
// import IngredientDetailsInfoItem from './ingredient-details-info-item'
// import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

// const IngredientDetails = ({ ingredient, onClose }) => {
//   return (
//     <div className={`${styles.wrapper}`}>
//         <div className={`${styles.card} p-10 pb-15`}>
//             <header className={styles.header}>
//                 <h2 className='text text_type_main-large'>Детали ингредиента</h2>
//                 <CloseIcon type="primary" onClick={onClose} />
//             </header>
            
//             {/* {JSON.stringify(ingredient, null, 2)} */}
//             <div className={styles.info}>
//                 <img className={styles.productImage} src={ingredient.image}></img>
//                 <h4 className="text text_type_main-medium pt-4 m-0">{ingredient.name}</h4>

//                 <IngredientDetailsInfoBlock>
//                     <IngredientDetailsInfoItem text="Калории,ккал" value={ingredient.calories} />
//                     <IngredientDetailsInfoItem text="Белки, г" value={ingredient.proteins} />
//                     <IngredientDetailsInfoItem text="Жиры, г" value={ingredient.fat} />
//                     <IngredientDetailsInfoItem text="Углеводы, г" value={ingredient.carbohydrates} />
//                 </IngredientDetailsInfoBlock>

//             </div>
//         </div>
//         {/* Детали ингредиента */}
//     </div>
//   )
// }

// export default IngredientDetails