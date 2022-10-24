import React, { useState } from 'react'
import Burger from './components/Burger'
import IngredientList from './components/IngredientList'
import './App.css'

const ingredientArray = [
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


const BurgerStacker = () => {

  const [addedIngredients, setAddedIngredients] = useState([])

  
  const addToStack = (event) => {
    const ingredientToAdd = ingredientArray.find(ingredient => ingredient.name === event.target.dataset.target)
    setAddedIngredients((ingredient) => {
      return [...addedIngredients, ingredientToAdd]
    })
  }

  const clear = () => {
    setAddedIngredients([])
  }

  return (
    <>
      <div className="burger-area">
        <IngredientList ingredients={ingredientArray} addHandler={addToStack} />
        <Burger ingredients={addedIngredients} clearHandler={clear}/>
      </div>
    </>

  );
  
}


export default BurgerStacker