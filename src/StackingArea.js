import React, { Component } from 'react';
import StackIngredient from './StackIngredient';


const StackingArea =  (props) => {
        const ingredients = props.stackIngredients.map((ing, i)=>{
            return <StackIngredient ingredient={ing} key={i} addIngredient={props.addIngredient}/>
        })
        return(
        <div className="ingredient-container">
            <p>My Burger:</p>
            {ingredients}
            <button className='clear' onClick={props.clearBurger}>Clear Burger</button>
        </div>
        )
}

export default StackingArea