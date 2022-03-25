import React, { Component } from 'react'
import Ingredient from './Ingredient'
import Burger from './Burger';
import './App.css';



export default class IngredientList extends Component {
    constructor(props){
        super(props)

        // put the burget state here and then push it as a prop to burger
        this.state = {
            burgerIngredients:[]
        }
    }

  
    // create a function that listens to the add button
    addIngredient = (index) => {
        console.log('INGREDIENT BEING PUSHED IS!', this.props.ingredientList[index])
        const newIngredient=this.props.ingredientList[index]
        this.state.burgerIngredients.unshift(newIngredient)
        this.setState({
            burgerIngredients: this.state.burgerIngredients
        })
    }

    // create a function that clears ingredients
    clearIngedients = () =>{
        this.setState({
            burgerIngredients: []
        })
    }

        render(){

            const ingredientList = this.props.ingredientList.map((ingredient, index)=>{
                return (
                        <>
                            <div class="ingredient-button-container">
                                <Ingredient ingredient={ingredient}/>
                                <button
                                    onClick={()=> this.addIngredient(index)}
                                >
                                ADD
                                </button>
                            </div>
                        </>
                )
            })

            return(
                <>
                    <div id="master-container">
                        <div class="container">
                            <h1> LIST OF INGREDIENTS</h1>
                            <div> {ingredientList}</div>
                        </div>
                        <Burger burgerIngredients={this.state.burgerIngredients} clearIngredients={this.clearIngedients}/>
                    </div>
                </>
                )
        }

}

