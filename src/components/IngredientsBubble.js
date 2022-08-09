import React, { Component } from "react";
import Ingredient from "./Ingredient.js";

class IngredientsBubble extends Component {
  state = {
    ingredients: this.props.ingredients
  };

  parseIngredient = (ingredient, key) => {
    const name = ingredient.name;
    const color = ingredient.color;

    return (
      <Ingredient key={key} name={name} color={color} />
    )
  };

  render() {
    const ingredientDomList = this.state.ingredients.map((ing, i) => (
      this.parseIngredient(ing, i)
    ));

    return (
      <>
        <h1>Ingredients</h1>
        <div className="flex-break"></div>
        <div id="ingredient-list">
          <ul>
            { ingredientDomList }
          </ul>
        </div>
      </>
    );
  }
}

export default IngredientsBubble;