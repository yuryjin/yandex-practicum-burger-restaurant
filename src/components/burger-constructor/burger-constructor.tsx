import React from 'react'
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './styles/burger-constructor.module.scss'

const BurgerConstructor = ({ products }) => {
  return (
    <>
      <div className='pt-25 pr-1'>
        <div style={{ display: 'flex', flexDirection: 'column'
          // , gap: '16px' 
        }}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
            extraClass={`ml-10`}
          />

          <div className={styles.ingredients}>
            <div className={`${styles.BurgerConstructorItem} pt-4`}>
              <DragIcon type="primary" />

              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
                extraClass={`mt-0 ml-1`}
              />
            </div>
            
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
            
          </div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
            extraClass={`ml-10 mt-4`}
          />
        </div>

        <div className={`${styles.checkoutBlock} pt-10`}>
          <div className={`${styles.totalPrice} pr-10`}>
            <h4 className='text text_type_digits-medium'>{"610"}</h4>
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