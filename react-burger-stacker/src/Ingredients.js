import React, {Component} from 'react';

export default class Ingredients extends Component {
    render () {
        const ingredientItems = this.props.ingredients.map((ingredients, i) => {
            //key is i and the value is b
            return <li key={i}>{ingredients.name}</li>
        })
        return (
            <div>
                {ingredientItems}
            </div>
        )
    }
}