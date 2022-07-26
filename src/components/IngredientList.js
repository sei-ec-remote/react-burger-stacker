import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render() {
        let allIngredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>
                <Ingredient ingredient={ing} clickFunc={this.props.add} itemKey={index}/>
            </li>
        ))

        return (
            <>
                <section>
                    <h3>Ingredients List</h3>
                    <ul>
                        {allIngredients}    
                    </ul>
                </section>
            </>
        )
    }
  }
  
  export default IngredientList