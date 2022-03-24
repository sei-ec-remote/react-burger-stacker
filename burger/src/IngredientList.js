import { Component } from "react";
import Ingredient from "./Ingredient";

export default class IngredientList extends Component {
  render() {
    return (
      <div >
        <h2>Ingredient list</h2>
        <Ingredient />
      </div>
      )
  }
}