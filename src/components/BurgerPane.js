import React, { Component }from "react"
import Ingredient from "./Ingredient"
import ClearBurger from "./ClearBurger"

class BurgerPane extends Component {
    
    render () {

        let burgerIngredients = this.props.ingredients.map((ingredient, index) => (
            <Ingredient ingredient={ingredient}/>
        ))

        return (
            
            <section className="pane">
                <h1>Burger Pane</h1>
                <ClearBurger clear={this.props.clear}/> 
            </section>
        )
    }
}

export default BurgerPane