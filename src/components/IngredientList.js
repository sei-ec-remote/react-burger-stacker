import React, {Component} from 'react'

class IngredientList extends Component {

    render() {
        const allIngredients = this.props.ingredients.map((ingredient, ind) => (
            <li key={ind} ><button onClick={() => this.props.addIngredient(ingredient)}>{ingredient.name}</button></li>
        ))
        return (
            <div className="container">
                <ul>Click to Add
                    {allIngredients}
                </ul>
            </div>
        )
    }
}

export default IngredientList