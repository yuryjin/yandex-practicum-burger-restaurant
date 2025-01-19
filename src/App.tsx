import { useReducer, useState } from 'react'
import './App.css'
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients'
import BurgerConstructor from './components/burger-constructor/burger-constructor'
import { products } from '../utils/data'
import Modal from './components/modal/modal'
import IngredientDetails from './components/ingredient-details/ingredient-details'
import OrderDetails from './components/order-details/order-details'

function updatePrice(totalPrice, action) {
  // const newTotalPrice = totalPrice
  const { type, amount } = action

  // if (action.type === 'increment') {
  //   // return { 
  //   //   // ...state,
  //   //   totalPrice: 
  //   // }
  //   return totalPrice
  // }
  // if (condition) {
    
  // }

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
  const [count, setCount] = useState(0)
  const [ingredients, setIngredients] = useState([])
  const [currentBun, setCurrentBun] = useState(null)
  // const [totalPrice, setTotalPrice] = useState(null)
  const [totalPrice, setTotalPrice] = useReducer(updatePrice, 0)
  const [isOpen, setIsOpen] = useState(false)
  const [chosenIngredient, setChosenIngredient] = useState(null)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const ChangeBun = (bun) => {
    if (currentBun && currentBun._id !== bun._id) {
      setTotalPrice({
        type: 'decrement',
        amount: currentBun.price * 2
      })
    }
    setCurrentBun(bun)
    // if (currentBun && currentBun._id !== bun._id) {
    if (!currentBun || (currentBun && currentBun._id !== bun._id)) {
      setTotalPrice({
        type: 'increment',
        amount: bun.price * 2
      })
    }
    console.log(currentBun);
    
  }

  const AddItemToSelectedProducts = (ingredient) => {
    setIngredients([...ingredients, ingredient])
    setTotalPrice({
      type: 'increment',
      amount: ingredient.price
    })
  }

  const onClickOnIngredient = (ingredient) => {
    setIsOpen(true)
    setChosenIngredient(ingredient)
  }

  const openCheckoutModal = () => {
    setIsCheckoutOpen(true)
    setIsOpen(true)
  }

  return (
    <>

    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      {/* Fancy Modal */}
      {
        isCheckoutOpen ? 
        <OrderDetails onClose={() => setIsOpen(false)} /> : <IngredientDetails ingredient={chosenIngredient} onClose={() => setIsOpen(false)} />
      }
      
    </Modal>

      <main className='layout-main'>
        <AppHeader />
        <div className='layout'>
          <div className='layout-column'>
            <BurgerIngredients onAddItem={onClickOnIngredient} OnChangeBun={onClickOnIngredient} />
          </div>
          <div className='layout-column'>
            {/* <BurgerIngredients /> */}
            {/* {JSON.stringify(currentBun, null, 2)} */}
            <BurgerConstructor ingredients={ingredients} bun={currentBun} totalPrice={totalPrice} onOpenCheckoutModal={openCheckoutModal} />
          </div>
        </div>
      </main>

    </>
  )
}

export default App
