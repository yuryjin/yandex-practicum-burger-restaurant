import React from 'react'
import styles from './styles/burger-grid.module.scss'

const BurgerGrid = (props) => {
  return (
    <>
      <h3 className={`${styles.gridHeader} text text_type_main-medium pt-4`}>{props.name}</h3>
      <div className={styles.grid}>{props.children}</div>
    </>
  )
}

export default BurgerGrid