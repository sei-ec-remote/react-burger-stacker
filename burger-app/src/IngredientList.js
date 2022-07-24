import React, { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientList extends Component {
  render() {
      let allIngredients = this.props.ingredients.map((ing, index) => {
          return <Ingredient ingredients={ing} key={index} />
      })
    return (
      <>
        <ul>
          {allIngredients}
        </ul>
      </>
    );
  }
}

export default IngredientList;
