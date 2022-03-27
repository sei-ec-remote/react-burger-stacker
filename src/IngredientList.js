import React, {Component} from 'react';
import Ingredient from'./Ingredient'

export default class IngredientList extends Component { 
    render (){
        //ing is ingredient and i is the index of the array
        let allIngredients = this.props.ingredients.map ((ing, i) => ( 
                <li key={i} onClick={this.props.addIngs}>
                    <Ingredient  itemKey={i} ingredient={ing} />
                </li>
    
        ))
        return (
        <section className="pane">      
            <h3>Ingredients list</h3> 
            <ul>  
                {allIngredients}
            </ul>
        </section>
            )
        }
}