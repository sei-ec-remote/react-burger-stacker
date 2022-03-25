import React, { Component } from 'react'
import './index.css'

export default class Ingredient extends Component {
    render () {
        return (
            <p>{this.props.ingredient}</p>
        )
    }
}