import React from "react"
import Ingredient from "./ingredient";

const BurgerPane = (props) => {
         let burgerBits = props.ingredients.map((ing, i)=> (
        <li key={i}>
            <Ingredient 
            itemKey={i}
            ingredient={ing}
            clickFunc={this.props.remove}
            />
        </li>
    ))
            return(
                <section className="pane">
                    <h3>Burger Pane</h3>
                    <ul>
                        { burgerBits }
                    </ul>
                    <button onClick={this.props.clear}>Clear Burger</button>
                </section>
            )

}

export default BurgerPane