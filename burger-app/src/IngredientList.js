import React, { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientList extends Component {
  render() {
      let allIngredients = this.props.ingredients.map((ing, index) => {
          return <Ingredient ingredients={ing} key={index} burgIng={this.props.burgIng}/>
      })
    return (
      <div className="hey">
        <ul>
          {allIngredients}
        </ul>
      </div>
    );
  }
}

export default IngredientList;
