import React, { Component } from 'react'

export default class BurgerIngredients extends Component {
    render() {
        return (
            <>
                <li>
                    {this.props.ingredientList}
                </li>
            </>
        )
    }
}