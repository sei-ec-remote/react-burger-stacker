import React, { Component } from 'react'

class Ingredients extends Component {
    render() {
        console.log(this.props.ingredients)
        const ingredientItems = this.props.ingredients.map(
            (ingredient, index) => {
                return <li key={`ingredient-list-${index}`}>
                    <form>
                        {/* Resource for JSON.stringify recommendation: https://salesforce.stackexchange.com/questions/328075/event-target-value-returning-object-object-instead-of-the-value */}
                        <button type="submit" value={JSON.stringify(ingredient)} onClick={this.props.onClick}>{ingredient.name}</button>
                    </form>
                </li>
                    // <li key={`ingredient-list-${index}`}>
                    // <button type="submit" onClick={this.props.addIngredient}>{ingredient.name}</button>
                    // </li>
                    
            })
        return (
            <>
            <ul className="ingredient-list">
                {ingredientItems}
            </ul>
            </>
        )
    }
}

export default Ingredients