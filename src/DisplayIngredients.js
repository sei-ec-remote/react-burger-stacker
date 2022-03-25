// import react component
import React, { Component } from 'react'


export default class DisplayIngredients extends Component {
    render () {
        console.log('what is props', this.props)
       


        const ingredients = this.props.ingredients.map((ing, i) =>{
            return  <button class='ingredients' key={i} onClick={this.stackfunc}> {ing.name}</button>
        })

       
        

        console.log('what is ingredients', ingredients)
        return (
          <div class='ingredientsBox'>

            <div>
              {ingredients}
            </div>
          </div>
            
        )
    }
}