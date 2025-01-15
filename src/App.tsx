import { useState } from 'react'
import './App.css'
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader />
      <BurgerIngredients />
    </>
  )
}

export default App
