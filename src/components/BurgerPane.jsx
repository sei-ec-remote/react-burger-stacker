import React, { Component } from "react";

class BurgerPane extends Component{
    render(){
         let burgerIngredients = this.props.ingredients.map(ing=> (
            <li >
            <p className="burger" style={{backgroundColor: ing.color}}> 
                </p>
          </li>
    ))
            return(
                <section className="column">
                    <h3>Burger Pane</h3>
                    <ul>
                        { burgerIngredients }
                    </ul>
                    <button onClick={this.props.clear}>Clear </button>
                </section>
            )
}
}
export default BurgerPane