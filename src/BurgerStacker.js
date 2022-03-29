import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

// burger stacker component is the parent of BurgerPane and IngredientList

//  hold ingredients in state, so we can pass them as props

const BurgerStacker = () => {
  const [ingredients, setIngredients] = useState([
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
    { name: 'Onion', color: 'lightyellow' },
  ])
  const [burgerIngredients, setBurgerIngredients] = useState([])

  // state will hold ingredients
  // might want methods here to add ingredients, that will be passed to a child component
  const addToStack = (e) => {
    const ingColor = e.target.style.backgroundColor
    const ingName = e.target.innerText
    setBurgerIngredients([
      {
        name: ingName,
        color: ingColor,
      },
      ...burgerIngredients,
    ])
  }

  const clearBurger = () => {
    setBurgerIngredients([])
  }
  // might want my clear function here, to pass down as a prop

  console.log('ingredients list', ingredients)
  console.log('Burger ingredients', burgerIngredients)
  return (
    <>
      <h1>Burger Stacker</h1>
      <div className="panes">
        <IngredientList ingredients={ingredients} add={addToStack} />
        <BurgerPane ingredients={burgerIngredients} clear={clearBurger} />
      </div>
    </>
  )
}

export default BurgerStacker
