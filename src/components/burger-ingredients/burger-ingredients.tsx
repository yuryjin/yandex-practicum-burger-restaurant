import { useState, useEffect } from 'react';
import BurgerIngredientsTitle from './burger-ingredients-title'
import styles from './burger-ingredients.module.scss'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerProduct from './burger-product.tsx'
import BurgerGrid from './burger-grid.tsx'

import { Ingredient } from '../../../types/types.ts';

const BurgerIngredients: React.FC<{
    ingredients: Ingredient[];
    onAddItem: (bun: Ingredient) => void,
    OnChangeBun: (ingredient: Ingredient) => void,
}>  = ({ ingredients, onAddItem, OnChangeBun }) => {
  const [current, setCurrent] = useState('Булки')

  useEffect(() => {
  }, [])

  const chooseBun = (bun: Ingredient) => {
    OnChangeBun(bun)
  } 
  
  const chooseProduct = (ingredient: Ingredient) => {
    onAddItem(ingredient)
  }

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

      <div className={`${styles.constructorContent} mt-10`}>
      <BurgerGrid name='Булки'>
      {
        ingredients.filter((product: Ingredient) => product.type === 'bun').length > 0 ?
          ingredients.filter((product: Ingredient) => product.type === 'bun')  
          .map((product: Ingredient) => {
            return (
              <BurgerProduct key={product._id} product={product} onAddItem={chooseBun} />
            )
          }): ''
      }
      </BurgerGrid>

      <BurgerGrid name='Соусы'>
      {
        ingredients.filter((product: Ingredient) => product.type === 'sauce').length > 0 ?
          ingredients.filter((product: Ingredient) => product.type === 'sauce')  
          .map((product: Ingredient) => {
            return (
              <BurgerProduct key={product._id} product={product} onAddItem={chooseProduct} />
            )
          }): ''
      }
      </BurgerGrid>

      <BurgerGrid name='Начинки'>
      {
        ingredients.filter((product: Ingredient) => product.type === 'main').length > 0 ?
          ingredients.filter((product: Ingredient) => product.type === 'main')  
          .map((product: Ingredient) => {
            return (
              <BurgerProduct key={product._id} product={product} onAddItem={chooseProduct} />
            )
          }): ''
      }
      </BurgerGrid>
      </div>
    </>
  )
}

export default BurgerIngredients