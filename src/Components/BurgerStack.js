import React, {Component} from 'react'

import Ingredients from './Ingredients'

class BurgerStack extends Component{
    render(){
      const ingredientsList = this.props.ingredients.map((ingredient, index)=>{
       return <li key={index}>{ingredient}</li>
    })
        return(
            <>
            <ul>
                {ingredientsList}
            </ul>
            </>
        )
    }
}

export default BurgerStack