
import React, {Component} from 'react'

export default class Ingredients extends Component {
    render () {
        const ingredientItems = this.props.ingredient.map((ing, index)=>{
            return <li key={index}><button>{ing.name}</button></li>
        })
        return(
            <div>
                <h3>Ingredient List</h3>
                <ul>
                    {ingredientItems}
                </ul>
            </div>
        )
    }
}