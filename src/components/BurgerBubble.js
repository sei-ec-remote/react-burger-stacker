import React, { Component } from "react";
import Ingredient from "./Ingredient";

class BurgerBubble extends Component {
  state = {
    ingredients: this.props.ingredients,
  }

  parseBurgerStackItem = (item, key) => {
    const ingredient = this.state.ingredients.filter(ing => (ing.name === item))[0];

    return (
      <Ingredient
        key={key}
        name={ingredient.name}
        color={ingredient.color}
      />
    )
  }

  render() {
    const burgerStack = this.props.burgerStack;
    const burgerStackDoms = burgerStack.map((item, i) => (
      this.parseBurgerStackItem(item, i)
    ));

    
    return (
      <>
        <div id="burger-bubble">
          <h1>Burger</h1>
          <ul id="burger-stack-container">
            { burgerStackDoms }
          </ul>
        </div>
      </>
    );
  }
}

export default BurgerBubble;