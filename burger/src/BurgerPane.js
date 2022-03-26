import { Component } from "react";
import Ingredient from "./Ingredient";

export default class BurgerPane extends Component {
  render() {
    let burgerBits = this.props.ingredients.map((ing, i) => (
      <li>
        <Ingredient itemKey={i} ingredient={ing}/>
        </li>
    ))
    return (
      <section className="pane">
        <h2>BurgerPane</h2>  
        <ul>
          {burgerBits}
        </ul>
        <button onClick={this.props.clear}>Destroy Burger</button>
      </section>
    )
  }
} 