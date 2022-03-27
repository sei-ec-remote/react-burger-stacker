//this is where the burger happens 

import React, {Component} from 'react';
import Ingredient from'./Ingredient' 
export default class BurgerPane extends Component {
    render () {
        let burgerBits = this.props.ingredients.map((ing, i) => (
                    <Ingredient itemKey={i} ingredient={ing } />
        ))
        return(

            <section className="pane">
            <ul> 
                {burgerBits}
            </ul>    
             <h3>burger pane</h3>
             <button onClick={this.props.clear}>Clear Burger</button>
             </section> 
        )
    }
}