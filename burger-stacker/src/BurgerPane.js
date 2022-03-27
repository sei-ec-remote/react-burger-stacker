import React, { Component } from "react";
// the burger pane needs to display the ingredients components
// just like ingredientslist does
import Ingredients from "./Ingredients";


export default class BurgerPane extends Component {
// eventually this will get ingredients, and loop the array and should display 
// similarly to the ingredientsList
// the difference will be the clear button

    render(){
        let burgerBits = this.props.ingredients.map((ingredients, index) => (
            <li key={index}>
            <Ingredients itemKey={index} ingredients={ingredients} clickFunction={this.props.remove}/>
            </li>
        ))
        return(
            <section className="pane">
                <h3>The Burger Pane</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}