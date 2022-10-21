import React, { Component } from "react";

import ClearBurger from "./ClearBurger";
import Ingredient from "./Ingredient";

class BurgerPane extends Component {
  render() {

	let burgerBits = this.props.ingredients.map((ing, i) =>(
		<p key = {i}>
			<Ingredient
				itemKey={i}
				ingredient={ing}
				clickFunc = {this.props.remove}
			/>
		</p>
	))
    return (
		<section className="burger-container">
		<h3>Burger Pane</h3>
		<section>
			{ burgerBits }
		</section>
		<button onClick={this.props.clear}>Clear</button>
	</section>
	)
  }
}

export default BurgerPane;
