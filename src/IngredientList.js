import React, { Component } from 'react';
import Ingredient from './Ingredient';

export default class IngredientList extends Component {
  render() {
    // const [ingredient] = this.props.ingredients;

    let allIngredients = this.props.ingredients.map((ing, i) => (
      <li key={i} onClick={this.props.add}>
        <Ingredient itemKey={i} ingredient={ing} />
      </li>
    ));
    return (
      <section className="pane">
        <h3>Ingredient List</h3>
        <ul>{allIngredients}</ul>
      </section>
    );
  }
}
