import React, { Component } from 'react'
import Ingredient from './Ingredient'


export default class IngredientList extends Component {
    render () {
        
        let allIngredients = this.props.ingredients.map((ing, i) => (
            <li key={i} onClick={this.props.add}>
                <Ingredient itemKey={i} ingredient={ing}/>
            </li>
        ))
        return (
            <>
                <section class='pane'>
                    <h3>Ingredients List</h3>
                        <ul>
                            {allIngredients}
                        </ul>
                </section>

            </>
        )
    }
}