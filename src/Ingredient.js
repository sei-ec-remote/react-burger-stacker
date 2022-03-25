import React, { Component } from 'react'

export default class Ingredient extends Component {
    
    render () {

        return (
            <div className='ingredient' style={{'background-color': this.props.ingredient.color}}>
                <p>{this.props.ingredient.name}</p>
            </div>
        )
    }
}