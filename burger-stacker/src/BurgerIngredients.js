import React, { Component } from 'react'

export default class BurgerIngredients extends Component {
    render(){
        const burgerItems = this.props.ingredients.map((yum, i) => {
            return <li key={i}>{yum.name}</li>
        })
        return (
            <ul>
                {burgerItems}
            </ul>
        )
    }
}