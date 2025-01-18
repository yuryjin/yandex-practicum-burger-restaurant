import React from 'react'
import styles from './burger-ingredients.module.scss'

const BurgerProduct = ({ product }) => {
  return (
    <>
      <div className='product-card-outer pt-6 pl-4 pr-4'>
        <img className={styles.productImage} src={product.image}></img>

        <h4 className='text text_type_digits-default'>{product.price}</h4>
      </div>
        


        <br />
        <br />
        {JSON.stringify(product, null, 2)}
        
    </>
  )
}

export default BurgerProduct