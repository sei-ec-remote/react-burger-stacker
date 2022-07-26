import React, {Component} from 'react'

import Ingredients from './Ingredients'

class IngredientList extends Component {
    render () {
        // map over the ingredients 
        // mapped over and created from Ingredient Component
        let allIngredients = this.props.ingredients.map((ing, index)=>(
            <li key={index}>
                <Ingredients 
                    ingredient={ing}
                    clickFunction={this.props.add}
                    itemKey={index}
                />
            </li>
        ))
        return (
            <>
                <section>
                    <h3> Ingredients List </h3>
                    <ul>
                        {allIngredients}
                    </ul>
                </section>
            </>
        )
    }
}

export default IngredientList