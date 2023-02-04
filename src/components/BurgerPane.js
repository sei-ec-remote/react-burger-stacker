import React, { Component } from 'react'
import BurgerStack from './BurgerStack'

class BurgerPane extends Component {
    render() {
        return (
            <div>
                <h1>Burger Pane:</h1>
                <BurgerStack burger={this.props.burger} onClick={this.props.onClick}/>
            </div>
        )
    }
}

export default BurgerPane