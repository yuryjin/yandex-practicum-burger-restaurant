import React from 'react'
import clsx from 'clsx'
import styles from './styles/constructor-element-empty.module.scss'

const ConstructorElementEmpty: React.FC<{
    text: string;
    type?: 'top' | 'bottom';
    extraClass?: string;
}> = ({ 
    text,
    type,
    extraClass,
}) => {
    const className = clsx(
        'constructor-element',
        {
            [`constructor-element_pos_${type}`]: type,
        },
        styles.constructorElement,
        extraClass
    );


    return (
        <div className={className}>
            <span className="constructor-element__row">
                <span className="constructor-element__text">{text}</span>
            </span>
        </div>
    )
}

export default ConstructorElementEmpty