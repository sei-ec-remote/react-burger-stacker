import React, { Component } from 'react'
import BurgerStack from './BurgerStack'

class BurgerPane extends Component {
    render() {
        // Render the clear burger button component and the burger ingredients
        return (
            <>
                <div className='burger-pane'>
                    <BurgerStack burgerIngredients={this.props.burgerIngredients} smash={this.props.smash} />
                </div>
            </>
        )
    }
}

export default BurgerPane