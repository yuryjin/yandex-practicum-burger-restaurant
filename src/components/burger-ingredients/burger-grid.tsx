import { ReactNode } from 'react';
import styles from './styles/burger-grid.module.scss'

const BurgerGrid: React.FC<{
  name: string;
  children?: ReactNode;
}> = ({ 
  name, 
  children 
}) => {
  return (
    <>
      <h3 className={`${styles.gridHeader} text text_type_main-medium pt-4`}>{name}</h3>
      <div className={styles.grid}>{children}</div>
    </>
  )
}

export default BurgerGrid