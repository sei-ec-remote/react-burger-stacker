import './App.css';
import React, { Component } from 'react'
import Ingredient from './components/Ingredient'
import IngredientList from './components/IngredientList'
import BurgerStacker from './components/BurgerStacker'


function App() {
  const burgerStack=[]
  return (
    <div className="App">
        <BurgerStacker />
    </div>
  );
}

export default App;
