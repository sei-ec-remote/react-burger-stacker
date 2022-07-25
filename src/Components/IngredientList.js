import React, {Component} from 'react'
import Ingredients from './Ingredients'

//Ingredient area for list of ingredients

class IngredientList extends Component{
    state={
        ingredientsToDisplay: this.props.ingredients
    }

    render(){
        return(
            <>
            <Ingredients 
            ingredients= {this.state.ingredientsToDisplay}
            />
            
            </>
        )
    }
}

export default IngredientList