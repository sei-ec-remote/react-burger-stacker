import './App.css';
import React, {useState} from 'react';

import BurgerPane from './Components/BurgerPane';
import IngredientList from './Components/IngredientList';
import data from './data'

function App() {
  const [burgerState, setBurgerState] = useState([])

  function addToBurger(ell){
    setBurgerState([ell, ...burgerState])
    return
  }

  function clearBurger(){
    setBurgerState([])
    return
  }

  return (
    <div className="grid-container">
    <IngredientList ingredients={data} addToBurger={addToBurger}/>
    <BurgerPane ingredients={burgerState} onClear={clearBurger}/>
    </div>
  );
}

export default App;
