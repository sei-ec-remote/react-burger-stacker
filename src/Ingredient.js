import React, { Component } from 'react'

export default class Ingredients extends Component {
    render () {
        // map over our ingredients(from props)
        // display a list item for each of them
        // in = ingredients, i = index
        // const ingredients = this.props.ingredients.map((ing, i) => {
        //     return <p key={i}>{ing}</p>
        // })
        return (
            <p style={{backgroundColor: `${this.props.ingredients.color}`}}>
                {this.props.ingredients.name}
            </p>
        )
    }
}