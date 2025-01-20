import React from 'react'
import styles from './styles/ingredient-details-info-item.module.scss'

import { Ingredient } from '../../../types/types';

const IngredientDetailsInfoItem: React.FC<{
  text: string | undefined;
  value: number | null;
}> = ({ text, value}) => {
  return (
    <div className={styles.infoitem}>
        <p className={`text text_type_main-small ${styles.text}`}>{text}</p>
        <p className={`text text_type_main-small ${styles.text} mt-2`}>{value}</p>
    </div>
  )
}

export default IngredientDetailsInfoItem