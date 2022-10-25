import React, { Component } from "react"
import Ingredient from "./Ingredient"

const BurgerPane = (props) => {
    let burgerIngs = props.ingredients.map((ing, i) => (
        <li key={i}>
            <Ingredient
                itemKey={i}
                ingredient={ing}
                clickFunc={props.remove}
            />
        </li>
    ))

    return (
        <section className="pane">
            <h3>Burger Pane</h3>
            <section className="bottomUp">
                <ul className="bottoms">
                    {burgerIngs}
                </ul>
                <button className="bottoms" onClick={props.clear}>Clear Burger</button>
            </section>
        </section>
    )
}

export default BurgerPane