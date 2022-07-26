import React, { Component }from "react";


 class IngredientList extends Component {

    render () {
        let allIngredients = this.props.Ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient.name} {ingredient.color}</li>
        })
       
        return (
            <div>
                {/* <h1>Ingredients</h1>
                <p>{this.props.IngredientList[0].name}</p> */}
               
                <h1>Ingredients:</h1>
                <ul>
                    {allIngredients}
                </ul>
            </div>
        )
    }
}

export default IngredientList