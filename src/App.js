import React, { Component }from "react";
import BurgerPane from "./components/BurgerPane"
import IngredientList from "./components/IngredientList"
import BurgerStack from "./components/BurgerStack"
import Ingredient from "./components/Ingredient"
import ClearBurger from "./components/ClearBurger"
import './App.css';




function App() {
  return (
    <>
    <IngredientList />
    <BurgerPane />
    </>

  );
}

export default App;
