import React from 'react'
import styles from './styles/burger-product.module.scss'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerProduct = ({ product }) => {
  return (
    <>
      <div className='product-card-outer pt-6 pl-4 pr-4 pb-10'>
        <img className={styles.productImage} src={product.image}></img>

        <div className={styles.price_title}>
          <h4 className='text text_type_digits-default'>{product.price}</h4>
          <CurrencyIcon type="primary" />
        </div>

        <h4 className='text text_type_main-small pt-1'>{product.name}</h4>

        {/* <br />
        <br />
        {JSON.stringify(product, null, 2)} */}
      </div>
        



        
    </>
  )
}

export default BurgerProduct