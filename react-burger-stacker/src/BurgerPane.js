import React, {useState} from "react";
import Ingredients from "./Ingredients";
//this is where the burger happens
const BurgerPane = (props) => {
    //burger pane will eventually get props(ingredients), and should loop and display those
    //similar to the ingredients list
    //the differnce will be the clear button
        //console.log('ingredients in burger pane', this.props.ingredients)
        //You have to do an implied return (()) not {} or the burger
        //ingredients do not move state to the burger pane!
        //we add the clickFunc later from Ingredients to help remove a single ingredient
        let burgerPane = props.ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredients 
                    itemKey={i} 
                    ingredients={ing} 
                    clickFunc={props.remove}
                />
            </li>
            
        ))
        return (
            <section className="burger-pane">
                <h3>Burger Pane</h3>
                <ul>
                    {burgerPane}
                </ul>
                <button onClick={props.clear}>Clear Burger Pane</button>
            </section>
        )
}
export default BurgerPane