// this is where we're going to display the birger that we are stacking
// items clicked in the ingredient list will be added to this component
import React from "react"
// since burger pane needs to display ingredient components, we'll import those as well
import Ingredient from "./Ingredient"

const BurgerPane = (props) => {
        const burgerBits = this.props.ingredients.map((ing, i ) => (
            <li key={i}>
                <Ingredient
                    itemKey={i}
                    ingredient={ing}
                    clickFunc={this.props.remove}
                />
            </li>
        ))
    return (
        <section className='pane'>
            <h3>Burger Pane</h3>
            <ul>
                { burgerBits }
            </ul>
            <button onClick={this.props.clear}>Clear Burger</button>
        </section>
    )

}

export default BurgerPane