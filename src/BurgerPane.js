import React, { Component } from "react"
import Ingredient from "./Ingredient"

export default class BurgerStacker extends Component {
  render() {
    let burgerBits = this.props.ingredients.map((ing, i) => (
      <li>
        <Ingredient itemKey={i} ingredient={ing} />
      </li>
    ))
    return (
      <section className="pane">
        <h3>Burger Pane</h3>
        <ul>{burgerBits}</ul>
        <button onClick={this.props.clear}>Clear Burger</button>
      </section>
    )
  }
}
