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
    const burgerStack = [ ...this.state.burgerStack, ingredientName ];
    this.setState({
      burgerStack: burgerStack
    })
  }

  handleUndoIngredient = () => {
    const burgerStack = [ ...this.state.burgerStack ];
    burgerStack.pop();
    this.setState({
      burgerStack
    })
    console.log(this.state);
  }

  render() {
    console.log(this.state.burgerStack);
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
            undo={ this.handleUndoIngredient }
          />
        </div>
      </div>
    );
  }
}

export default App;
