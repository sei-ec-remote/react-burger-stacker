import React,{ Component } from "react"
import Ingredient from './Ingredient'

class IngredientList extends Component {
    // state = {
    //     ingredientsToDisplay: this.props.ingredients
    // }
    render(){
        const allItems = this.props.ingredients.map((ingredient, index) =>{
            return <Ingredient ingredient ={ingredient} key={index} addItem={this.props.addItem} isBurger={false}/>
        })
       
        return (
            <>
            <div className = 'ingredient-List'>
                {allItems}
                {/* <Ingredient ingredients={this.state.ingredientsToDisplay}/> */}
            </div>
            </>
        )
    }
}

// const IngredientItems = this.props.Ingredients.map(ingredient => <li key ={ingredient}>{ingredient}</li>)

export default IngredientList