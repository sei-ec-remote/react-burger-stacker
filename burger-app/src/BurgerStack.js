import React, { useState } from "react";
import App from "./App";
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";

const BurgerStack = () => {
  const [ingredients, setIngredients] = useState([
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ]);
  const [burgIngredients, setBurgIngredients] = useState([]);
  const addToStack = (e) => {
    const ingColor = e.target.style.backgroundColor;
    const ingName = e.target.innerText;

    setBurgIngredients((prevState) => [
      ...prevState,
      { name: ingName, color: ingColor },
    ]);
  };

  //remove from burder
  const removeFromStack = (e) => {
    console.log('hit')
    //select an ingredient by id
    const clickIndex = e.target.id;
    console.log(clickIndex)
    //copy whole burger
    const currBurger = burgIngredients.slice();
    //remove that ingredient
    
    currBurger.splice(clickIndex, 1);
    //set state
  };
  //clear burger
  const clearBurger = () => {
    setBurgIngredients([]);
  };

  return (
    <>
      <IngredientList ingredients={ingredients} add={addToStack} />
      <BurgerPane
        ingredients={burgIngredients}
        remove={removeFromStack}
        clear={clearBurger}
      />
    </>
  );
};

export default BurgerStack;
