import React from 'react'
import styles from './styles/burger-grid.module.scss'

const BurgerGrid = (props) => {
  return (
    <div className={styles.grid}>{props.children}</div>
  )
}

export default BurgerGrid