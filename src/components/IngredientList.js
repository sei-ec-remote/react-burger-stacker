import React, { Component } from 'react'
import Ingredients from './Ingredients'

class IngredientList extends Component {
    render() {
        // Render ingredient lists
        console.log(this.props.ingredients)
        return (
            <>
                <div className='ingredient-pane'>
                    <h3>Ingredients</h3>
                    <Ingredients ingredients={this.props.ingredients} onClick={this.props.onClick}/>
                </div>
            </>
        )
    }
}

export default IngredientList