import React, {Component} from "react";
import Ingredient from "./Ingredient";
import IngredientList from "./IngredientList";

export default class BurgerPane extends Component {

render() {
let burgerBits = this.props.ingredients.map((ing, index) =>(
    <li key={index}>
    <Ingredient itemKey={index} ingredient={ing} clickFunc={this.props.remove}/>
    </li>
))
    return(
        <section className="pane">
        <h3>B Pane</h3>
        <ul>
            {burgerBits}
        </ul>
        <button onClick={this.props.clear}> Clear Burger</button>
        </section>
    )
}


}