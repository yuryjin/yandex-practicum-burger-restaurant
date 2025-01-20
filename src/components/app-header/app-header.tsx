
import styles from './styles/app-header.module.scss'
import { BurgerIcon, ListIcon, Logo, ProfileIcon   } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
  return (
    <>
        <header className={styles.header}>
            <nav>
                <menu className={styles.menu}>
                    <a className={styles.a}>
                        <BurgerIcon type='primary' />
                        <span className="text text_type_main-default">Конструктор</span>
                    </a>

                    <a className={styles.a}>
                        <ListIcon type='secondary' />
                        <span className="text text_type_main-default text_color_inactive">Лента заказов</span>
                    </a>
                </menu>

                <Logo />

                <menu className={styles.menu}>
                    <a className={styles.a}>
                        <ProfileIcon  type='secondary' />
                        <span className="text text_type_main-default text_color_inactive">Личный кабинет</span>
                    </a>
                </menu>
            </nav>
        </header>
    </>
  )
}

export default AppHeader