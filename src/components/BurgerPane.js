import React, { Component } from 'react'
import BurgerStack from './BurgerStack'

class BurgerPane extends Component {
    render() {
        return (
            <>
                <div className='burger-pane'>
                    <BurgerStack burgerIngredients={this.props.burgerIngredients} />
                </div>
            </>
        )
    }
}

export default BurgerPane