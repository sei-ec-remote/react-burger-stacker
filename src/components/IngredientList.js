import React, { Component } from 'react'
import Ingredients from './Ingredients'
import ClearBurger from './ClearBurger'
import SmashBurger from './SmashBurger'

class IngredientList extends Component {
    render() {
        // Render ingredient lists
        console.log(this.props.ingredients)
        return (
            <>
                <div className='ingredient-pane'>
                    <h3>Ingredients</h3>
                    <Ingredients ingredients={this.props.ingredients} onClick={this.props.onClick}/>
                    <ClearBurger onClick={this.props.onClear} />
                    <SmashBurger onClick={this.props.onSmash} />
                </div>
            </>
        )
    }
}

export default IngredientList