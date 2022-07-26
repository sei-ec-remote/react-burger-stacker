import React, {Component} from 'react'
import Ingredients from './Ingredients'


class BurgerPane extends Component{
    // map over all the added burger bits
    // still going to use the Ingredients Components
    render(){
        let burgerBits = this.props.ingredients.map((ing, index)=>((
            <li key={index}>
                <Ingredients 
                    itemKey={index}
                    ingredient={ing}
                    clickFunction={this.props.remove}
                />
            </li>
    
        )))

        return(
            <section>
                <h3> Burger Pane </h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}

export default BurgerPane