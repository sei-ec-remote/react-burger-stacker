import React, { Component } from 'react'
import Ingredient from './Ingredient'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    render() {
        let burgerParts = this.props.ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient
                    itemkey={i}
                    ingredient={ing}
                    clickFunc={this.props.remove}
                />
            </li>
        ))
        
        return (
            <section className='pane'>
                <h1>BURGER PANE</h1>
                <ul>
                    {burgerParts}
                </ul>
               <button onClick={this.props.clear}>Clear Burger</button> 
               
                    
            </section>
        )
    }
}

export default BurgerPane