import { useState } from 'react'
import './App.css'
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients'

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
          </div>
        </div>
      </main>
    </>
  )
}

export default App
