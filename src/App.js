import './App.css';
import React, { useState } from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane'
import ingredients from './Ingredients'

const App = (props) => {
  const [burgerIngList, setBurgerIngList] = useState([])

  const handleClick = (ingred) => {
    const updatedList = [ingred, ...burgerIngList]
    setBurgerIngList(updatedList)
  }
  const clearBurg = (props) => {
    setBurgerIngList([])
  }

  const removeFromStack = (clickIndex) => {
    const currBurger = burgerIngList.filter((ing, index) => index !== clickIndex)
    // console.log('current burger after splice', currBurger)
    setBurgerIngList(currBurger)
  }

  return (
    <div>
      <h1>Burger Stacker</h1>
      <div className="burgContainer">
        <IngredientList ingredients={ingredients} handleClick={handleClick} />
        <BurgerPane burgIngredients={burgerIngList} clearBurg={clearBurg} removeFromStack={removeFromStack} />
      </div>
    </div>
  );
}


export default App;
