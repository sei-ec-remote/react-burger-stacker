import React, { Component } from "react";
import Ingredients from "./Ingredients";

export default class IngredientsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            foodsToDisplay: this.props.foodItems

        }
        console.log('this is the state', this.state)
    }
    render(){
        let foods = this.state.foodsToDisplay.map((foods,index) => {
            console.log('this is foods', foods)
            return <li key={index}>
                <Ingredients foods = {foods}/>
                </li>
        })
        console.log('this is after foods', foods)
        return(
            <div>
              {foods} 
            </div>
        )
    }
}
