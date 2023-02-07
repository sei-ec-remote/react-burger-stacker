import { useState } from 'react'
import IngredientList from './components/IngredientList'
import BurgerStack from './components/BurgerStack'
import Ingredients from './components/Ingredient'

function App() {
  const [clickedIngredients, setClickIngredients] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    // console.log(`Clicked on ${e.target.innerText} and ${e.target.style.backgroundColor}`)
    setClickIngredients([{ name: e.target.innerText, color:e.target.style.backgroundColor }, ...clickedIngredients])
  }

  const handleClear = () => {
    setClickIngredients([])
  }
  
  return (
    <div>
      <h1>Burger Stacker</h1>
      <div className="burger-pane">
        <IngredientList 
          ingredients={Ingredients}
          handleClick={handleClick} 
        />
        <BurgerStack 
          clickedIngredients={clickedIngredients} 
          handleClear={handleClear} 
        />
      </div>
    </div>
  )
}

export default App





