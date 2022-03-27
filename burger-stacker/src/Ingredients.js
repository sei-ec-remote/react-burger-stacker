import { toHaveAttribute, toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
// this is a child component of ingredientslist 
// receives the props of an indiviual ingredient
// ingredient ---> color and name


export default class Ingredients extends Component {
    render() {
        // we want to map over the foodItems from props'
        // we want to display a list item for each of them
        // f is food, i is index
        // we can use deconstruction in order to access the colors and name within
        // the props
        const { name, color } = this.props.ingredients
        // console.log('this si the name props ', name)
        // console.log('this si the  color props ', color)
        return (
            <strong>
                <p style={{ backgroundColor: color }}
                    id={this.props.itemKey}
                    onClick={this.props.clickFunction}
                >
                    {name}
                </p>
            </strong>
        )
    }
}
