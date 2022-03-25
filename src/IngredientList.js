import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {

    render () {

        const ingredients = this.props.ingredients.map((ingredient, index) => {
            return ( 
                <li key={index} onClick="">
                < Ingredient ingredient={ingredient}/> 
                </li>
            );
        });

        return (
            <div className="container">
            <h2>Hamburger Ingredient List</h2>
            <ul>
            { ingredients }
            </ul>
            </div>
        );
    }
}