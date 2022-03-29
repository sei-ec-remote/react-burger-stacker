import React, { useState, useEffect } from 'react'
import Ingredient from './Ingredient'
import Burger from './Burger';
import './App.css';



const IngredientList  = (props) => {
    const [burgerIngredients, setBurgerIngredients] = useState([])
  
    // create a function that listens to the add button
    const addIngredient = (index) => {
        console.log('INGREDIENT BEING PUSHED IS!', props.ingredientList[index])
        const newIngredient=props.ingredientList[index]
        burgerIngredients.unshift(newIngredient)
        console.log('BURGER INGREDIENTS: ', burgerIngredients)
        console.log('BURGER INGREDIENTS WITH SPREAD OPERATOR: ', ...burgerIngredients)
        setBurgerIngredients([...burgerIngredients])
    }

    // create a function that clears ingredient
    const clearIngedients = () =>{
        setBurgerIngredients([])
    }
    

    useEffect(() => {
        console.log('use effect ran')
        console.log('burgerIngredients are: ', burgerIngredients)
        
      }, [burgerIngredients])

    const ingredientList = props.ingredientList.map((ingredient, index)=>{
        return (
                <div key={ingredient.name}>
                    <div className="ingredient-button-container" key={ingredient.name}>
                        <Ingredient ingredient={ingredient}/>
                        <button
                            onClick={()=> addIngredient(index)}
                            key={ingredient.name}
                        >
                        ADD
                        </button>
                    </div>
                </div>
        )
    })

    return(
        <>
            <div id="master-container">
                <div className="container">
                    <h1> LIST OF INGREDIENTS</h1>
                    <div> {ingredientList}</div>
                </div>
                <Burger burgerIngredients={burgerIngredients} clearIngredients={clearIngedients}/>
            </div>
        </>
        )
}

export default IngredientList
