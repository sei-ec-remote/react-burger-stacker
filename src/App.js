import React, { Component } from "react";
import './App.css';

import IngredientsBubble from "./components/IngredientsBubble.js";
import BurgerBubble from "./components/BurgerBubble.js";

import ingredients from "./data/ingredientList.js";

class App extends Component {
  state = {
    burgerStack: []
  }

  handleAddToBurger = (event) => {
    const ingredientName = event.target.innerText;
    this.state.burgerStack.push(ingredientName);
  }

  render() {
    return (
      <div className="App">
        <div className="bubble">
          <IngredientsBubble
            ingredients={ ingredients }
            addToBurger={ this.handleAddToBurger }
          />
        </div>

        <div className="bubble">
          <BurgerBubble
            ingredients={ ingredients }
            burgerStack={ this.state.burgerStack }
          />
        </div>
      </div>
    );
  }
}

export default App;
