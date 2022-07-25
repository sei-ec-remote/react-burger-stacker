import React, { Component } from 'react';

class IngredientRow extends Component {
    render() {
        const ingredientItems = this.props.ingredients.map((ingredient,idx) => {
            const color = ingredient.color
            const ingredientStyle = {
                backgroundColor: color,
                width: 400,
            }
            return <div key={idx}> <button onClick={this.props.onChange} class="ingredient" style={ingredientStyle} value={ingredient.name}>{ingredient.name}</button></div>
        })
        return (
            <div>
                {ingredientItems}
            </div>
            )
    }
}

export default IngredientRow;
