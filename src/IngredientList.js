import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component{
    render() {
        let allIngredients = this.props.ingredients.map((ing,index)=> (
             <li key={index}>
                <Ingredient itemKey={index} ingredient={ing} clickFunc={this.props.add}/>
            </li>
        ))
        return (
            <section className='pane'>  
                <h1>Ingredients:</h1>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )  
    }   
}