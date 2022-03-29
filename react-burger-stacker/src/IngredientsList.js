import React, {useState} from "react";
import Ingredients from './Ingredients'

//ingredients list will loop over props ingredients
//produce one ingredient component for each item in the array
const IngredientsList = (props) => {
        let ingredientItems = props.ingredients.map((ing, i) => (
            //key is i and the value is ingredients
            //clickFunction is being called in from the Ingredients where we are adding
            //it to an onClick function, so we remove the onClick from the li here in the list
            //onClick={this.props.addIngs} -> removed once clickFunction was added
            //We removed the onClick from the list items and placed it on  
            //the actually ingredients themselves! now they are expecting clickFunc
            <li key={i}>
                <Ingredients itemKey={i} ingredients={ing} clickFunc={props.addIngs} />
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
export default IngredientsList