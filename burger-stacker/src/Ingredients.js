import React, { Component } from 'react'

export default class Ingredients extends Component {
    render(){
        const ingredientItems = this.props.ingredients.map((yum, i) => {
            return <li key={i}><button>{yum.name}</button></li>
        })
        return (
            <ul>
                {ingredientItems}
            </ul>
        )
    }
}