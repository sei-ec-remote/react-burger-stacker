import React from 'react';
import Ingredient from './Ingredient';

// This is where the burger happens
// Burger pane needs to display ingredient components, similarly to how IngredientList does

const BurgerPane = (props) => {
  console.log('these are the props', props);
  let burgerBits = props.ingredients.map((ing, i) => (
    <li key={i}>
      <Ingredient itemKey={i} ingredient={ing} clickFunc={props.remove} />
    </li>
  ));
  return (
    <section className="pane">
      <h3>Burger Stack</h3>
      <ul>{burgerBits}</ul>
      <button onClick={props.clear}>Clear Burger</button>
    </section>
  );
};

export default BurgerPane;
