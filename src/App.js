import './App.css';
import React, { useState, useEffect } from 'react';
import ingredientArray from './IngredientList';
import IngredientContainer from './IngredientContainer';
import StackingArea from './StackingArea';
const App = () =>  {
  // constructor () {
  //   super ()
  //   this.state = {
  //     ingredientsToDisplay: ingredientArray,
  //     stackIngredients: []
  //   }
  // }
  const [stackIngredients, setStackIngredients] = useState([])
  const addIngredient = (e) =>{
    console.log("this is the target", e.target.style)
    let object = {name: e.target.innerText, color: e.target.style.backgroundColor}
    setStackIngredients(
            [{object}, ...stackIngredients]
            )
  }
  const clearBurger = () =>{
    setStackIngredients([])
  }
    // console.log('this is the state: ', this.state)
  return (
    <div className="App">
      <IngredientContainer ingredients={ingredientArray} addIngredient={addIngredient}/>
      <StackingArea stackIngredients={stackIngredients} clearBurger={clearBurger}/>

    </div>
  );

}

export default App;
