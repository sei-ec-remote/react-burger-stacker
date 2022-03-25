import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component
{
    render()
    {
        const stack = this.props.burgerStack.map( (ingredient, index) => {
            return <li>{ingredient.innerText}</li>
            // return <Ingredient ingredient={ingredient} key={index}/>
        })

        return(
            <ul>
                {stack}
            </ul>
        )
    }
}