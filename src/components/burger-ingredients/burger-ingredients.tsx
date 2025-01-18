import React from 'react'
import BurgerIngredientsTitle from './burger-ingredients-title'
import styles from './burger-ingredients.module.scss'
// import products from '@/utils/data.ts'
import { products } from '../../../utils/data.ts'

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerProduct from './burger-product.tsx'

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('Булки')
  // const 

  return (
    <>
      <BurgerIngredientsTitle />
      <div className={styles.tabs}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      {
        products.filter((product) => product.type === 'bun').length > 0 ?
          products.filter((product) => product.type === 'bun')  
          .map((product) => {
            return (
              <BurgerProduct product={product} />
            )
          }): ''
        }
    </>
  )
}

export default BurgerIngredients