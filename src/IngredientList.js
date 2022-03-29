import React, { Component } from 'react';

const IngredientsList = (props) => {
    const ingredientList = props.ingredients.map((n, i) => {
        return <li
            key={i}
            onClick={() => props.handleClick(n)}
            style={{ backgroundColor: n.color }}
        > {n.name}</li >
    })
    return (
        <>
            <div className="column">
                <h2>List of Ingredients</h2>
                <ul
                    className="items"
                >
                    {ingredientList}
                </ul>
            </div>
        </>

    )
}

export default IngredientsList