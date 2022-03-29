// import React, {Component} from 'react'

// export default class Ingredients extends Component {
    //     render () {
        //         const {name, color} = this.props.ingredient
        //         return(
            //            <p style={{backgroundColor: color}}>{name}</p>
            //         )
            //     }
            // }
            
// import IngredientList from './IngredientList'
// import BurgerPane from './BurgerPane'
import React, { useState } from 'react'

const Ingredient = (props) => {
    const {name, color} = props.ingredient

    return (
        <p 
            style={{backgroundColor: color}}
        >
            {name}
        </p>
    )
}

export default Ingredient