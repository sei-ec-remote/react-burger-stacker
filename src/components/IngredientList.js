import React,{ Component } from "react"
import Ingredient from './Ingredient'

class IngredientList extends Component {
    // state = {
    //     ingredientsToDisplay: this.props.ingredients
    // }
    render(){
        const allItems = this.props.ingredient.map((item, index) =>{
            return <Ingredient ingredient ={item} key={index} addItem={this.props.addItem} isBurger={false}/>
        })
       
        return (
            <>
            {allItems}
            {/* <Ingredient ingredients={this.state.ingredientsToDisplay}/> */}
            </>
        )
    }
}

// const IngredientItems = this.props.Ingredients.map(ingredient => <li key ={ingredient}>{ingredient}</li>)

export default IngredientList