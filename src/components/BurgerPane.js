import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    render() {
        // Render the clear burger button component and the burger ingredients
        return (
            <>
                <div className='burger-pane'>
                    <ClearBurger onClick={this.props.onClick}/>
                    <BurgerStack burgerIngredients={this.props.burgerIngredients} />
                </div>
            </>
        )
    }
}

export default BurgerPane