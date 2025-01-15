
import React from 'react'
import './styles/app-header.css'
// import burgerIcon from '../images/icons/burger-icon.svg'
import { BurgerIcon, ListIcon, Logo, ProfileIcon   } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
  return (
    <>
        <header>
            <nav>
                <menu>
                    <li>
                        <BurgerIcon type='primary' />
                        <span className="text text_type_main-default">Конструктор</span>
                    </li>

                    <li>
                        <ListIcon type='primary' />
                        <span className="text text_type_main-default">Лента заказов</span>
                    </li>


                </menu>

                <Logo />

                <menu>
                    <li>
                        <ProfileIcon  type='primary' />
                        <span className="text text_type_main-default">Личный кабинет</span>
                    </li>
                </menu>
            </nav>
        </header>
    </>
  )
}

export default AppHeader