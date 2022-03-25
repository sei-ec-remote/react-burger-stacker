import React, {Component} from "react";
import Ingredients from './Ingredients'

export default class IngredientsList extends Component {
    constructor (props) {
        super (props)
        this.state = {
            ingredientsToDisplay: this.props.ingredients
        }
    }
    handleClickFunction = (e) => {
        const addIngredient = this.props.e.target.name
        console.log(addIngredient)
    }
    render () {
        return (
            <div className="ingredients">
                <h1>Ingredients</h1>
                <Ingredients ingredients={this.state.ingredientsToDisplay}/>
            </div>
        )
    }
}