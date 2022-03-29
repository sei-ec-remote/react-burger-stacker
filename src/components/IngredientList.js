import React, { Component } from 'react'
//eventually import ingredient component 
import Ingredient from '../components/Ingredient'


//ingredient list will loop over props (ingredients)

//produce one ingredient component for each item in array


export default class IngredientList extends Component {
    render() {
        //console.log('props in ing list ', this.props.ingredients)
        //ing = ingredient, i = index of array
        let allIngredients = this.props.ingredients.map((ing, i) => (
            <li key={i} onClick={this.props.add}>
                <Ingredient itemKey={i} ingredient={ing}/>
            </li>
        ))
        return (
            <section className="pane">
                <h3>Ingredients List</h3>
                <ul>
                {allIngredients}
                </ul>
            </section>
        )
    }
}