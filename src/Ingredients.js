import React, {Component} from 'react'

export default class Ingredients extends Component {
    render () {
        const ingredientItems = this.props.ingredient.map((ing, index)=>{
            return <li style={{backgroundColor: ing.color}} key={index}>{ing.name}</li>
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