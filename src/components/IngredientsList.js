import React, { Component } from 'react' 

import Ingredients from './Ingredients'

class IngredientList extends Component {
    render () {
        const allIngs = this.props.ingredients.map((items) => {
            //Buttosn
        })
        return (
            <> {allIngs} </>
        )
    }
}

export default IngredientList