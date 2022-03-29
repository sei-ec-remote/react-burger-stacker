import React, { Component } from 'react'
import Ingredient from './Ingredient'
import './App.css';

const Burger  = (props) => {

    const burger = props.burgerIngredients.map((ingredient, index)=>{
        return (
            <Ingredient ingredient={ingredient} key={index}/>  
        )
    })

    return(
        <>
            <div className="container">
                <h1> Order up!</h1>
                <div> {burger} </div>
                <button onClick={props.clearIngredients}>
                    CLEAR
                </button>
            </div>
        </>
        )
}

export default Burger


