import React, { useState, useEffect } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const BurgerStacker = () => {
  // state = {
    const ingredients = [
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ]
    const [burgerIngredients, setBurgerIngredients] = useState([])


  // add to the burger
  // click an ing and use event to target it
  const addToStack = (e) => {
    // get color
    const ingColor = e.target.style.backgroundColor
    // get name
    const ingName = e.target.innerText
    // add to state
    setBurgerIngredients(
        [{name: ingName, color: ingColor},
        ...burgerIngredients]
      )
  }

  // remove from burger
  const removeFromStack = (e) => {
    // select an ing by ID
    const clickIndex = e.target.id
    // copy the burger
    const currBurger = burgerIngredients.slice()
    // remove that ing
    currBurger.splice(clickIndex, 1)
    //set that state
    setBurgerIngredients(currBurger)
  }

  // clear burger
  const clearBurger = () => {
    // set state back to empty array
    setBurgerIngredients([]
      )
    }
  
    return (
      <div>
        <IngredientList ingredients={ingredients} add={addToStack} />
        <BurgerPane ingredients={burgerIngredients} remove={removeFromStack} clear={clearBurger}/>
      </div>
    )
}
export default BurgerStacker