import React, { Component } from 'react';

class IngrediantItem extends Component {

    addToStack = (props) => {
        let joined;

        console.log('adding to stack...', this.props)

        this.setState({

            // myState: "Here's the new state",

            // joined : this.state.burgerStack.concat('new value'),

            // burgerStack: joined,

        }, () => console.log('inside setState', this.state))

        // this.setState((state, props) => {
        //     let newBurgerStack;

        //     newBurgerStack = [...state.burgerStack, this.state.name]

        //     return {
        //         burgerStack: newBurgerStack
                
        //     }
        // }, () => console.log('inside setState', this.state))
        
        // console.log(this.props.burgerStack)
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