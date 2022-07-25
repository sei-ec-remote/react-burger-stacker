import React, { Component} from "react";

class Ingredients extends Component {
    render () {
        // .map will always pass our callback function the item ('fruit') then the index ('idx')
        const ingredientItems = this.props.ingredients.map((ingredient, idx) => {
            return <li key={idx}>{ingredient.name}</li>
        })
        return (
            <ul>{ingredientItems}</ul>
        )
    }
}

export default Ingredients