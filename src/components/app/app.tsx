import { useEffect, useReducer, useState } from 'react'
import AppHeader from '../../components/app-header/app-header'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import { mockBun, mockIngredients } from '../../../utils/data'
import Modal from '../../components/modal/modal'
import IngredientDetails from '../../components/ingredient-details/ingredient-details'
import OrderDetails from '../../components/order-details/order-details'
import styles from './styles/app.module.scss'
import { List } from 'react-content-loader'

import { Ingredient } from '../../../types/types'

interface Action {
  type: string | undefined,
  amount: number,
}

function updatePrice(totalPrice: number, action: Action) {
  const { type, amount } = action
  switch (type) {
    case 'increment': {
      const newTotalPrice = totalPrice + amount
      return newTotalPrice
    }

    case 'decrement': {
      const newTotalPrice = totalPrice - amount
      return newTotalPrice > 0 ? newTotalPrice : 0 
    }
  
    default:
      return totalPrice
  }
}

function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [currentBun, setCurrentBun] = useState<Ingredient | null>(null)
  const [totalPrice, setTotalPrice] = useReducer(updatePrice, 610)
  const [isOpen, setIsOpen] = useState(false)
  const [chosenIngredient, setChosenIngredient] = useState<Ingredient | null>(null)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const [products, setProducts] = useState<Ingredient[]>([])
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    uploadProducts()

    setCurrentBun(mockBun)
    setIngredients(mockIngredients)
  }, [])
  
  const uploadProducts = () => {
    const fetchUrl = "https://norma.nomoreparties.space/api/ingredients"
    fetch(fetchUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then(data => {
        setProducts(data.data)
        setIsLoading(false)
      })
      .catch(e => {
        setIsLoading(false)
        setHasError(true)
      })
  }

  const onClickOnIngredient = (ingredient: Ingredient) => {
    setIsCheckoutOpen(false)
    setIsOpen(true)
    setChosenIngredient(ingredient)
  }

  const openCheckoutModal = () => {
    setIsCheckoutOpen(true)
    setIsOpen(true)
  }

  return (
    <>
      <div className={styles["layout-main"]}>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          {
            isCheckoutOpen ? 
            <OrderDetails onClose={() => setIsOpen(false)} /> : <IngredientDetails ingredient={chosenIngredient} onClose={() => setIsOpen(false)} />
          }
        </Modal>

        <main className='layout-main'>
          <AppHeader />
          <div className={styles.layout}>
            <div className={styles["layout-column"]}>
              {
                isLoading ?
                <List></List> :
                <BurgerIngredients ingredients={products} onAddItem={onClickOnIngredient} OnChangeBun={onClickOnIngredient} />
              }

              {
                hasError ? 
                <h4 className="text text_type_main-medium text_color_inactive">При загрузке данных произошла ошибка. Сожалеем и приносим извинения!</h4> : ''
              }

            </div>
            <div className={styles["layout-column"]}>
              {
                isLoading ?
                <List></List> :
                <BurgerConstructor ingredients={ingredients} bun={currentBun} totalPrice={totalPrice} onOpenCheckoutModal={openCheckoutModal} />
              }

              {
                hasError ? 
                <h4 className="text text_type_main-medium text_color_inactive">При загрузке данных произошла ошибка. Сожалеем и приносим извинения!</h4> : ''
              }
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
