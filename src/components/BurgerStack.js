import React, {Component} from 'react'
import Ingredient from './Ingredient'

export default class BurgerStack extends Component {
     render() {
          const ingredients = this.props.ingredients.map((ingredient, key) => (
               <Ingredient key={key} ingredient={ingredient} func={this.props.remove} />
          ))
          return (
               <>
                    {ingredients}
               </>
          )
     }
}