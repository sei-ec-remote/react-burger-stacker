import React, { Component } from 'react'
import Ingredients from './Ingredients'

class IngredientList extends Component {
    render() {
        console.log(this.props.ingredients)
        return (
            <>
                <div className='ingredient-pane'>
                    <Ingredients ingredients={this.props.ingredients} onClick={this.props.onClick}/>
                </div>
            </>
        )
    }
}

export default IngredientList