// loops over ingredients from props and displays one ingredient component per item
import React, {Component} from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render () {
        let allIngredients = this.props.ingedients.map((ing, i) => (
            <li key={i}>
                <Ingredient
                    itemKey={i}
                    ingredient={ing}
                    clickFunc={this.props.add}
                />
            </li>
        ))
        return (
            <section>
                <h3>Ingredient List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )
    }
}