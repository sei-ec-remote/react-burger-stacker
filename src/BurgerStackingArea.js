import React from 'react';

const BurgerStackingArea = (props) => {

    const ingredientItems = props.displayIngredients.map((ingredient,idx) => {
        const color = ingredient.color
        const ingredientStyle = {
            backgroundColor: color,
            width: 400,
        }
        return <div key={idx}> <div class="ingredient" style={ingredientStyle} value={ingredient.name}>{ingredient.name}</div></div>
    })
    return (
        <div class="burgerStackerArea">
            {ingredientItems}
        </div>
        )

}


export default BurgerStackingArea;
