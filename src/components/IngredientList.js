import React from 'react' 

const IngredientList = (props) => {

        const ingredientItems = props.ingredients.map(ingredient => 
            <li><button onClick={(e) => props.addItem(e)} key={ingredient}>{ingredient.name}</button></li>)
        return (
            <>
                <ul>{ingredientItems}</ul>
            </> 
        )

}

export default IngredientList

// import React, { Component } from 'react' 

// class IngredientList extends Component {

//     render () {
//         const ingredientItems = this.props.ingredients.map(ingredient => 
//             <li><button onClick={(e) => this.props.addItem(e)} key={ingredient}>{ingredient.name}</button></li>)
//         return (
//             <>
//                 <ul>{ingredientItems}</ul>
//             </> 
//         )
//     }
// }

// export default IngredientList