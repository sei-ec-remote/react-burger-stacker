import React, { Component } from 'react'

export default class BurgerStack extends Component {
    render () {
        return (
            <div>
                <button onClick={(e) => this.props.clearburger(e)}>CLEAR BURGER</button>                
            </div>
        )
    }
}