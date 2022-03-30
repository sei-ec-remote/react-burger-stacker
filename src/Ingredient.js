import React, { Component } from 'react'

export default class Ingredient extends Component {
    render () {
        // console.log('props in each ingredient', this.props)
        const { name, color } = this.props.ingredient
        // console.log('props in each color', color)
        // console.log('props in each name', name)
        return (
            <p 
                style={{backgroundColor: color}}
                id={this.props.itemKey}
                onClick={this.props.clickFunc}
            >
                {name}
            </p>
        )
    }
}