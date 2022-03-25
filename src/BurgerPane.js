import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

export default class BurgerPane extends Component
{
    render()
    {
        return(
            <div className='stack-div'>
                <h3>Burger Stack</h3>
                <BurgerStack burgerStack={this.props.stackIngredients}/>
                <ClearBurger emtpyStack={this.props.emtpyStack}/>
            </div>
        )
    }
}