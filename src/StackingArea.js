import React, { Component } from 'react';
import StackIngredient from './StackIngredient';


export default class StackingArea extends Component {
    render(){
        const ingredients = this.props.stackIngredients.map((ing, i)=>{
            return <StackIngredient ingredient={ing} key={i} addIngredient={this.props.addIngredient}/>
        })
        return(
        <div className="ingredient-container">
            <p>My Burger:</p>
            {ingredients}
            <button className='clear' onClick={this.props.clearBurger}>Clear Burger</button>
        </div>
        )
    }
}