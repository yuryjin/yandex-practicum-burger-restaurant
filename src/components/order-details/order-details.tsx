import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './styles/order-details.module.scss'
import orderdoneicon from '../../images/order-done-icon.png';
import React from 'react';

const OrderDetails: React.FC<{
  onClose: () => void,
}> = ({ 
  onClose 
}) => {
  return (
    <div className={`${styles.wrapper}`}>
        <header className={styles.header}>
            <CloseIcon type="primary" onClick={onClose} />
        </header>
        
        <div className={styles.info}>
            <p className="text text_type_digits-large pt-30">034536</p>
            <p className="text text_type_main-medium pt-8">идентификатор заказа</p>

            <img src={orderdoneicon} alt="Заказ успешно оформлен" className={`${styles.icon} pt-15`} />

            <h4 className="text text_type_main-small pt-15">Ваш заказ начали готовить</h4>
            <h5 className="text text_type_main-small text_color_inactive pt-2 pb-30">Дождитесь готовности на орбитальной станции</h5>
        </div>
    </div>
  )
}

export default OrderDetails