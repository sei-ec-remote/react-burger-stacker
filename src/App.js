import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import IngredientList from './Components/IngredientList'
import BurgerPane from './Components/BurgerPane';

function App() {
  return (
    <div>
      <IngredientList />
      <BurgerPane />
    </div>
  );
}

export default App;
