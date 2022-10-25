import './App.css';
import React, { useState } from 'react';
import BurgerPane from './components/BurgerPane';
import IngredientList from './components/IngredientList';
import Ingredients from './Ingredients';


const App = () => {
  // state = {
  //   onBurger: []
  // }

  const [onBurger, setOnBurger] = useState([])


  const addIngredient = (ingredient) => {
    console.log('before add:', onBurger )
    setOnBurger(prevOnBurger => {
      return [ingredient, ...prevOnBurger]
    })
  }

  const clearIngredient = () => {
    setOnBurger([])
    
  }

  const removeLastIngredient = () => {
    console.log(onBurger)
    setOnBurger(prevOnBurger => {
      const arr = prevOnBurger.slice()
      arr.shift()
      return arr
    })
  }


  return (
    <main>
      <IngredientList ingredients={Ingredients} addIngredient={addIngredient} />
      <BurgerPane ingredients={onBurger} clearIngredient = {clearIngredient} removeLastIngredient = {removeLastIngredient}/>

    </main>
  )
  
}


export default App;
