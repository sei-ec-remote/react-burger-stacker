import React from 'react'
import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'

const Ingredient = (props) => {



        const { name, color } = props.ingredient
        return (
            // <li>
            // <button onClick={this.props.add} style={{backgroundColor: this.props.ingredients.color}}>{this.props.ingredients.name}</button>
            // </li>
            <p style={{backgroundColor: color}}
            onClick={props.clickFunc}
            id={props.itemKey}
            >
                {name}
            </p>
        )
    
}

export default Ingredient