import { Component } from "react";
import Ingredient from "./Ingredient";

export default class BurgerPane extends Component {
  render() {
    return (
      <div>
        <h2>BurgerPane</h2>  
        <Ingredient />
      </div>
    )
  }
}