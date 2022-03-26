import React, {Component} from "react";
import Ingredients from './Ingredients'

//ingredients list will loop over props ingredients
//produce one ingredient component for each item in the array
export default class IngredientsList extends Component {
    render () {
        let ingredientItems = this.props.ingredients.map((ing, i) => (
            //key is i and the value is ingredients
            <li key={i} onClick={this.props.addIngs}>
                <Ingredients itemKey={i} ingredients={ing}/>
            </li>
        ))
        return (
            <section className="burger-pane">
                <h3>Ingredients List</h3>
                    <ul>
                        {ingredientItems}
                    </ul>
            </section>
        )
    }
}