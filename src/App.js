
import React, { useState} from 'react';
import './App.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

// Array of Ingredients to build a Burger as per assignment
const ingredientsData = [
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
];

export default function App () {

  const [ingredients, setIngredient] = useState({ingredientsData})
  const [burgerIngredients, setBurgerIngredients] = useState([])

  // Empty and reset the burgerIngredients array to empty
  const clearBurgerIngredients = () => {
    setBurgerIngredients([])
  }

  // AddIngredientToBurger is called from the click on an Ingredient
  //   It takes in an ingredient and needs to track a Burgers ingredients.
  //   Unshift adds a value to the beginning of an array.
  //   We have a list of burger ingredients and we add another to the
  //     beginning of the array.
  const addIngredientToBurger = (ingredient) => {
    let newIngredientArray = burgerIngredients

    newIngredientArray.unshift(ingredient)

    setBurgerIngredients(newIngredientArray)
  }

  // Display the list of ingredients by passing the list of ingredients via props
  //   and passing in the function to addIngredientToBurger
  // Display the BurgerPane by passing the burgerIngredients in 
  //   state and also the function for clearBurgerIngredients.
  return (
        <div className="App">
          <h1>Burger Stacker</h1>
          <h6>Click on an ingredient and add it to your hamburger</h6>
          <div className='burger_container'>
          < IngredientList 
            ingredients={ingredients.ingredientsData} 
            addIngredientToBurger={addIngredientToBurger}/>
          < BurgerPane 
            burgerIngredients={burgerIngredients}
            clearBurgerIngredients={clearBurgerIngredients}
          />
          </div>
        </div>
    );
}
