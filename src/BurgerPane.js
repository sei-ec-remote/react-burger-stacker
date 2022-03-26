import React, { Component } from 'react'
import Ingredient from './Ingredient'


export default class BurgerPane extends Component {
    render() {
        // console.log('ingred in burger pane',this.props.ingredients)
        let burgerBits = this.props.ingredients.map((ing,index) => (
            <li>
                <Ingredient itemKey = {index} ingredient={ing} clickFunc={this.props.remove}/>
            </li>
        ))

        return (
            <section className='pane'>
                Burger Pane
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}