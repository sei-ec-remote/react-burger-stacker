import React, {Component} from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
     render() {
          const ingredientList = this.props.availableIngredients.map((ingredient, key)=> { 
          return <Ingredient ingredient={ingredient} func={this.props.add} key={key} />
          })
          return (
               <>
                    <h3>Click on the items you want on your handburger</h3>
                   {ingredientList}
               </>
          )
     }
}