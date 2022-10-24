import React from "react";


import Ingredient from "./Ingredient";

const BurgerPane = (props) => {
  

	let burgerBits = props.ingredients.map((ing, i) =>(
		<p key = {i}>
			<Ingredient
				itemKey={i}
				ingredient={ing}
				clickFunc = {props.remove}
			/>
		</p>
	))
    return (
		<section className="burger-container">
		<h3>Burger Pane</h3>
		<section>
			{ burgerBits }
		</section>
		<button onClick={props.clear}>Clear</button>
	</section>
	)
  
}

export default BurgerPane;
