import React, { Component } from 'react'
import Ingredient from './Ingredient'


export default class IngredientList extends Component {
    constructor(props){
        super(props)
    }
        render(){

            const ingredientList = this.props.ingredientList.map((ingredient, index)=>{
                return <Ingredient ingredient={ingredient}/>
            })

            return(
                <>
                    <h1> LIST OF INGREDIENTS</h1>
                    <div> {ingredientList}</div>
                </>
                )
        }

}

