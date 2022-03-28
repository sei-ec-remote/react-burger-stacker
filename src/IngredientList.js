// import react component
import React, { Component } from 'react'
import Ingredient from './Ingredients'


// ingredient list will loop over props(ingredients)
// produce one Ingredient component for each item in the array

export default class IngredientList extends Component {

    // console.log('props in ing list', this.props.ingredients)

    render() {
        // ing= ingredient ,  i= index of array
        let allIngredients = this.props.ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient itemKey={i} ingredient={ing} clickFunc={this.props.addIng}/>
            </li>
        ))
            
        
        return (
            <section className='pane'>
                <h3>Ingredients List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )
    }
}