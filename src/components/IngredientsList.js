import React, {Component} from "react";


class IngredientsList extends Component {

    render(){
        const allIngredients = this.props.ingredients.map(ingredient => <li key={ingredient.name}><button key={ingredient.name}>{ingredient.name}</button></li>)
        return(
            <>
                <div className='Ingredients-list'>
                    Ingredients List
                    <ul>{allIngredients}</ul>
                </div>
            </>
        )
    }
}

export default IngredientsList