import React, { Component } from 'react';

class IngrediantItem extends Component {
    state = {
        burgerStack: []
    }

    addToStack = () => {
        console.log('adding to stack...')

        let newBurgerStack;

        this.setState((prevState, props) => {
            let newBurgerStack;

            newBurgerStack = [...prevState.burgerStack, this.props.name]
            return {
                burgerStack: newBurgerStack
                
                // burgerStack: newBurgerStack.push(this.props.name)
                // burgerStack
            }
        }, () => console.log('inside setState', this.state))
        
        console.log(this.state.burgerStack)
    }
    
    render() {
        
        return (
            <li className="ingredientItem" key={this.props.index}>
                <span className="ingrediantName">{this.props.name}</span>
                {/* <span className="ingrediantName">{this.props.color}</span> */}
                <button className="button" id={this.props.index} onClick={this.addToStack}>Add</button>
            </li>
        )
    }
}

export default IngrediantItem