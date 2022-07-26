import React, {Component} from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render(){
        const allIngredients = this.props.ingredients.map((ingredient, index) => {
            return(
                <p key={index}><button style={{backgroundColor: ingredient.color}} value={ingredient.name} onClick={(event) => this.props.addIngredient(event)}>
                    <Ingredient name={ingredient.name} color={ingredient.color}/>
                </button>
                </p>
            )
        })

        return(
            <>
            <h1>Build Your Own Burg</h1>
            <h3>Select an Ingredient to get Started</h3>
            {allIngredients}
            </>
        )
    }
}

export default IngredientList