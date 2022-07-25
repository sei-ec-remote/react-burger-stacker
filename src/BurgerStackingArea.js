import React, { Component } from 'react';

class BurgerStackingArea extends Component {
    render() {
        const ingredientItems = this.props.displayIngredients.map((ingredient,idx) => {
            const color = ingredient.color
            const ingredientStyle = {
                backgroundColor: color,
                width: 400,
            }
            return <div key={idx}> <div class="ingredient" style={ingredientStyle} value={ingredient.name}>{ingredient}</div></div>
        })
        return (
            <div class="burgerStackerArea">
                {ingredientItems}
            </div>
            )
    }
}


export default BurgerStackingArea;
