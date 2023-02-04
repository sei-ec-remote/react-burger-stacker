import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    render() {
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