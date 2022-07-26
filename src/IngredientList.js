// I want to import React and Component
import React, { Component } from 'react' 
import Ingredients from './Ingredients'

class IngredientList extends Component {
    state = {
        ingredientsToDisplay: this.props.ingredients
    }
    render () {
        return (
            <>
                <Ingredients />
            </>
        )
    }
}

export default IngredientList