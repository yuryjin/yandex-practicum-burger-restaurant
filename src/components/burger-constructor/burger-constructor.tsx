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
              price={200}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
              extraClass={`ml-10`}
            /> : 
            <ConstructorElementEmpty 
              text='Пожалуйста, выберите булку для вашего бургера'
              type='top'
              extraClass='ml-10'
            />
            // <div className='constructor-element constructor-element_pos_top ml-10'>
            //   <span className="constructor-element__row">
            //     <span className="constructor-element__text">Пожалуйста, выберите булку для вашего бургера</span>
            //   </span>
            // </div>
          }

          {/* {
            bun ?
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun?.name ? `${bun.name} (верх)` : 'Пожалуйста, выбери булку для вашего бургера'}
              price={200}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
              extraClass={`ml-10`}
            /> : <div className='constructor-element constructor-element_pos_top ml-10'>
              Пожалуйста, выбери булку для вашего бургера
            </div>
          } */}

          {/* // <ConstructorElement
          //   type="top"
          //   isLocked={true}
          //   text={bun?.name ? `${bun.name} (верх)` : 'Пожалуйста, выбери булку для вашего бургера'}
          //   price={200}
          //   thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
          //   extraClass={`ml-10`}
          // /> */}

          <BurgerConstructorIngredientsList ingredients={ingredients} />

          {/* <div className={styles.ingredients}>
            
            { ingredients && ingredients.length > 0 ?
              <div className={`${styles.BurgerConstructorItem} pt-4`}>
                <DragIcon type="primary" />

                <ConstructorElement
                  text="Краторная булка N-200i (верх)"
                  price={50}
                  thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
                  extraClass={`mt-0 ml-1`}
                />
              </div> :
              <ConstructorElementEmpty 
                  text='Пожалуйста, выберите булку для вашего бургера'
                  type='bottom'
                  extraClass='ml-10 mt-4'
                />
            } */}
            
            
            {/* <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
              extraClass={`ml-8 mt-4`}
            />

            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
              extraClass={`ml-8 mt-4`}
            />

            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
              extraClass={`ml-8 mt-4`}
            />
            
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
              extraClass={`ml-8 mt-4`}
            />
            
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
              extraClass={`ml-8 mt-4`}
            />
            
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
              extraClass={`ml-8 mt-4`}
            /> */}
            
          {/* </div> */}
          {/* <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun?.name ? `${bun.name} (низ)` : 'Пожалуйста, выбери булку для вашего бургера'}
            price={bun ? bun.price : ''}
            thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
            extraClass={`ml-10 mt-4`}
          /> */}

            {
            bun ?
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun?.name ? `${bun.name} (низ)` : 'Пожалуйста, выбери булку для вашего бургера'}
              price={bun ? bun.price : ''}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
              extraClass={`ml-10 mt-4`}
            /> : 
            <ConstructorElementEmpty 
              text='Пожалуйста, выберите булку для вашего бургера'
              type='bottom'
              extraClass='ml-10 mt-4'
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