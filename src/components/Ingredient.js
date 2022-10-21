import React,{ Component } from "react"

class Ingredient extends Component {
    render() {
        // const ingredientItems = this.props.ingredients.map(ingredient => <li key = {ingredient}>{ingredient.name}</li>)
        let ingredient = this.props.ingredient
        return (
            <>
             <button onClick={(e) => this.props.addItem(e.target.value)}value={ingredient.name}>{ingredient.name}</button>
              {/* <button onClick ={(e) => this.props.addItem(e.target.value)}value ={ingredientItems}>{ingredientItems.name}</button> */}
            </>
        )
    }
}


export default  Ingredient