import React, { Component } from 'react';


export default class IngredientsList extends Component {

    render() {
        // console.log("PROPS", this.props)
        const ingredientList = this.props.ingredients.map((n, i) => {
            return <li
                key={i}
                onClick={() => this.props.handleClick(n)}
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
}
