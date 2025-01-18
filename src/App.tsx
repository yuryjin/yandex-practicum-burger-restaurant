import { useState } from 'react'
import './App.css'
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients'
import BurgerConstructor from './components/burger-constructor/burger-constructor'
import { products } from '../utils/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='layout-main'>
        <AppHeader />
        <div className='layout'>
          <div className='layout-column'>
            <BurgerIngredients />
          </div>
          <div className='layout-column'>
            {/* <BurgerIngredients /> */}
            <BurgerConstructor products={products} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
