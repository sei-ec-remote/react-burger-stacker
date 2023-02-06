import React, { Component } from 'react';
import BurgerStack from './BurgerStack';
class BurgerPane extends Component {
    render () {
        return (
            <div>
                <h2>Burger:</h2>
                <BurgerStack burger={this.props.burger} />
            </div>
        )
    }
}


export default BurgerPane