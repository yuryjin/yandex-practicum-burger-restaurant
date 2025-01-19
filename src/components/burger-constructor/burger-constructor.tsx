import React from 'react'
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './styles/burger-constructor.module.scss'
import ConstructorElementEmpty from '../ui/ConstructorElementEmpty'
import BurgerConstructorIngredientsList from './burger-constructor-ingredients-list'

const BurgerConstructor = ({ ingredients, bun, totalPrice }) => {
  // const UpperBunText

  return (
    <>
      <div className='pt-25 pr-1'>
        <div style={{ display: 'flex', flexDirection: 'column'
          // , gap: '16px' 
        }}>

          {/* {JSON.stringify(bun, null, 2)} */}
          {/* {JSON.stringify(ingredients, null, 2)} */}

          {
            bun ?
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun?.name ? `${bun.name} (верх)` : 'Пожалуйста, выбери булку для вашего бургера'}
              price={bun ? bun.price : ''}
              thumbnail={bun ? bun.image : ''}
              extraClass={`ml-10`}
            /> : 
            <ConstructorElementEmpty 
              text='Пожалуйста, выберите булку для вашего бургера'
              type='top'
              extraClass='ml-10'
            />
          }

          <BurgerConstructorIngredientsList ingredients={ingredients} />
            {
            bun ?
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun?.name ? `${bun.name} (низ)` : 'Пожалуйста, выбери булку для вашего бургера'}
              price={bun ? bun.price : ''}
              thumbnail={bun ? bun.image : ''}
              extraClass={`ml-10`}
            /> : 
            <ConstructorElementEmpty 
              text='Пожалуйста, выберите булку для вашего бургера'
              type='bottom'
              extraClass='ml-10'
            />
          }

          {/* <ConstructorElement>asfd</ConstructorElement> */}
        </div>

        <div className={`${styles.checkoutBlock} pt-10`}>
          <div className={`${styles.totalPrice} pr-10`}>
            <h4 className='text text_type_digits-medium'>{totalPrice}</h4>
            <CurrencyIcon type="primary" />
          </div>

          <Button htmlType="button" type="primary" size="large" extraClass={`ml-2`}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  )
}

export default BurgerConstructor