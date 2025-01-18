// import React from 'react'
import React, { useState, useEffect } from 'react';
import BurgerIngredientsTitle from './burger-ingredients-title'
import styles from './burger-ingredients.module.scss'
// import products from '@/utils/data.ts'
import { products } from '../../../utils/data.ts'

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerProduct from './burger-product.tsx'
import BurgerGrid from './burger-grid.tsx'
// import BurgerTabs from './burger-tabs.tsx'

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('Булки')
  // const 

  useEffect(() => {
    // first
  
    // return () => {
    //   second
    // }
    console.log(products);
    
  }, [])
  

  return (
    <>
      <BurgerIngredientsTitle />
      {/* <BurgerTabs></BurgerTabs> */}
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
      <BurgerGrid className={styles.grid} name='Булки'>
      {
        products.filter((product) => product.type === 'bun').length > 0 ?
          products.filter((product) => product.type === 'bun')  
          .map((product) => {
            return (
              <BurgerProduct key={product._id} product={product} />
            )
          }): ''
      }
      </BurgerGrid>

      <BurgerGrid className={styles.grid} name='Соусы'>
      {
        products.filter((product) => product.type === 'sauce').length > 0 ?
          products.filter((product) => product.type === 'sauce')  
          .map((product) => {
            return (
              <BurgerProduct key={product._id} product={product} />
            )
          }): ''
      }
      </BurgerGrid>

      <BurgerGrid className={styles.grid} name='Начинки'>
      {
        products.filter((product) => product.type === 'main').length > 0 ?
          products.filter((product) => product.type === 'main')  
          .map((product) => {
            return (
              <BurgerProduct key={product._id} product={product} />
            )
          }): ''
      }
      </BurgerGrid>
      </div>



      {/* <div className={styles.grid}>
      {
        products.filter((product) => product.type === 'bun').length > 0 ?
          products.filter((product) => product.type === 'bun')  
          .map((product) => {
            return (
              <BurgerProduct product={product} />
            )
          }): ''
      }
      </div> */}
    </>
  )
}

export default BurgerIngredients