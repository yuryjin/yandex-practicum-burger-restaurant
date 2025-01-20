import styles from './styles/burger-product.module.scss'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import { Ingredient } from '../../../types/types.ts';
import React from 'react';

const BurgerProduct: React.FC<{
  product: Ingredient;
  onAddItem: (ingredient: Ingredient) => void;
}> = ({ 
  product, 
  onAddItem 
}) => {
  const chooseProduct = (ingredient: Ingredient) => {
    onAddItem(ingredient)
  }

  return (
    <>
      <div className='product-card-outer pt-6 pl-4 pr-4 pb-8' onClick={() => chooseProduct(product)}>
        <img className={styles.productImage} src={String(product.image)} alt={product.name ? product.name : 'Изображение ингредиента'}></img>

        <div className={styles.price_title}>
          <h4 className='text text_type_digits-default'>{product.price}</h4>
          <CurrencyIcon type="primary" />
        </div>
        <h4 className='text text_type_main-small pt-1'>{product.name}</h4>
      </div>
    </>
  )
}

export default BurgerProduct