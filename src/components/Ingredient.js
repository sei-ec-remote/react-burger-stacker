//Ingredient is a child of IngredientList
//receives the props of an individual ingredient-> color
//and name

//import React, { Component } from 'react'
import React, { useState } from 'react'
const Ingredient = (props) =>{
        const {name, color} = props.ingredient
        
        return (
            <p style={{backgroundColor: color}}>{name}</p>
        )
}

// export default class Ingredient extends Component {
//     render() {
//         const {name, color} = this.props.ingredient
        
//         return (
//             <p style={{backgroundColor: color}}>{name}</p>
//         )
//     }
// }
export default Ingredient