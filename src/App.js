import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import IngredientList from './Components/IngredientList'
import BurgerStack from './Components/BurgerStack';


 

function App() {
    
    return (
      <div>
      <BurgerStack/>
    </div>
  );
}


export default App;

// <IngredientList ingredients={ingredients}/>