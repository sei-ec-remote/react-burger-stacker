import { Component } from "react";

export default class Ingredient extends Component {
    render() {
      const {name, color} = this.props.ingredient
      
    return (
      <h5 style={{backgroundColor: color}}>{name}</h5>
    )
  }
}