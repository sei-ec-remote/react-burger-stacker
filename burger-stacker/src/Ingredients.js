import React, { Component } from "react";

export default class Ingredients extends Component {
    render(){
        // we want to map over the foodItems from props'
        // we want to display a list item for each of them
        // f is food, i is index
        
       
        return(
            <ul style={this.props.foods}>
            {this.props.foods.name}
            </ul>
        )
    }
}
