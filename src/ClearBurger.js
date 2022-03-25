import React, { Component } from 'react'

export default class ClearBurger extends Component
{
    render()
    {
        return(
            <button onClick={this.props.emptyStack}>Clear Burger</button>
        )
    }
}