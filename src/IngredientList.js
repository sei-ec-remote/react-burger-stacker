import React, {Component} from 'react'
import Ingredient from './Ingredient'


export default class IngredientList extends Component {
    render () {
        let allIngs = this.props.ingredients.map((ing, i) =>(
            <li key={i} onClick={this.props.addIngs}>
                <Ingredient itemKey={i} ingredient={ing}/>
            </li>
        ))
        return (
            <section className='stack' >
                <h3>Ingredients List</h3>
                <ul>
                    {allIngs}
                </ul>
            </section>
        )
    }
}
