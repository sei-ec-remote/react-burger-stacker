import React, { Component } from 'react'
import Ingredient from './Ingredient'
import './App.css';

export default class Burger extends Component {
    constructor(props){
        super(props)

    }
        render(){
            const burger = this.props.burgerIngredients.map((ingredient)=>{
                return <Ingredient ingredient={ingredient}/>
            })

            return(
                <>
                    <div class="container">
                        <h1> Order up!</h1>
                        <div> {burger}</div>
                    </div>
                </>
                )
        }

}


