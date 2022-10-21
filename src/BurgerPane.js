import React, {Component} from 'react'
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
    render () {
        let burgerBits = this.props.ingredients.map((ing, i ) => (
            <li key = {i}>
                <Ingredient
                    itemKey={i}
                    Ingredient={ing}
                />
            </li>
        ))
        return (
            <section className='pane'>
                <h3>
                    Burger Pane
                </h3>
                <ul>
                    {burgerBits}
                </ul>
            </section>
        )
    }
}