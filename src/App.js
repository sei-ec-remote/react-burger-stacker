import React, { useState } from "react"
import IngredientList from "./components/IngredientList"
import BurgerPane from "./components/BurgerPane"
import './App.css';

const App = () => {
  const ingredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' }
  ]
  const [burgerIngredients, setburgerIngredients] = useState([])

  const addIngredient = (e) => {
    const ingName = e.target.innerText
    const ingColor = e.target.style.backgroundColor
    setburgerIngredients([
      {
        name: ingName,
        color: ingColor
      },
      ...burgerIngredients
    ]
    )
  }

  const clear = () => {
    setburgerIngredients([])
  }

  return (
    <div className="container">
      <IngredientList
        Ingredients={ingredients}
        add={addIngredient}
      />
      <BurgerPane
        ingredients={burgerIngredients}
        clear={clear}
      />
    </div>
  )
}


export default App;
