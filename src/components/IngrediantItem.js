import React, { Component } from 'react';

class IngrediantItem extends Component {
    state = {
        burgerStack: []
    }

    addToStack = () => {
        console.log('adding to stack...')

        let newBurgerStack;

        this.setState((state, props) => {
            let newBurgerStack;

            newBurgerStack = [...state.burgerStack, this.props.name]

            return {
                burgerStack: newBurgerStack
                
            }
        }, () => console.log('inside setState', this.state))
        
        console.log(this.state.burgerStack)
    }
    
    render() {
        
        return (
            <li className="ingredientItem" key={this.props.index}>
                <span>{this.props.myState}</span>
                <span className="ingrediantName">{this.props.name}</span>
                {/* <span className="ingrediantName">{this.props.color}</span> */}
                <button className="button" id={this.props.index} onClick={this.addToStack}>Add</button>
            </li>
        )
    }
}

export default IngrediantItem