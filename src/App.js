import React, { useState } from 'react'
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';


const ingredientsArr = [
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

function App() {
  const [stackedIngredients, setStackedIngredients] = useState([])
  // state = {
  //   ingredients: ingredientsArr,
  //   stackedIngredients: []
  // }

  const clearStack = () => {
    setStackedIngredients([])
    // this.setState(() => {
    //   return {
    //     stackedIngredients: []
    //   }
    // })
  }

  const handleClickedIngredient = (event) => {
    const clickedIngredient = event.target.textContent
    const color = event.target.style.backgroundColor
    const eachIngredient = {}
    eachIngredient.name = clickedIngredient
    eachIngredient.color = color
    setStackedIngredients([eachIngredient, ...stackedIngredients])
    // this.setState(() => {
    //   return {
    //     stackedIngredients: [eachIngredient, ...this.state.stackedIngredients]
    //   }
    // })
  }


  return (
    <div className='burger-plate'>
      <IngredientList ingredients={ingredientsArr} handleClickedIngredient={handleClickedIngredient} />
      <BurgerStack ingredients={stackedIngredients} clearStack={clearStack} />
    </div>
  )

}



export default App;
