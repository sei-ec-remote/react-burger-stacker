import React, { Component } from "react"
import Ingredient from "./Ingredient"

export default class BurgerPane extends Component {
    render() {
        let burgerIngs = this.props.ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient
                    itemKey={i}
                    ingredient={ing}
                    clickFunc={this.props.remove}
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
                    <button className="bottoms" onClick={this.props.clear}>Clear Burger</button>
                </section>
            </section>
        )
    }
}