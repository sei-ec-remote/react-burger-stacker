import React, { Component } from 'react'
import Ingredient from './Ingredient'


export default class IngredientList extends Component {
    // onClick={addIngredient}
    render () {
        let allIngredients = this.props.ingredients.map((ing, i) => (
            <li key={i} onClick={this.props.add}>
                <Ingredient itemKey={i} ingredients={ing} />
            </li>
        ))
        console.log(allIngredients)
        return (
            <section className='pane'>
                <h2>Ingredient List</h2>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )
    }
}