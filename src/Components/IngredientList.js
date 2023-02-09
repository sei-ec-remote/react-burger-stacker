import React, { Component } from "react";
import Ingredient from "./Ingredient";

export default class IngredientList extends Component {
    render(){
        let allIngredients = this.props.ingredients.map((ingredient, i) =>(
            
                <Ingredient
                ingredient={ingredient}
                key={i}
                clickFunc={this.props.add}
                />
            
        ))
        return (
            <section className="pane">
                <h3>Ingredients List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )
    }
}
