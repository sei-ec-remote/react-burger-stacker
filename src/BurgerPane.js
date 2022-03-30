import React from "react";
 // the burger pane needs to display the ingredients components
 // just like ingredientslist does
import Ingredient from "./Ingredient";


 const BurgerPane = (props) => {
 // eventually this will get ingredients, and loop the array and should display 
 // similarly to the ingredientsList
 // the difference will be the clear button


         let burgerBits = props.ingredient.map((ingredient, index) => (
             <li key={index}>
             <Ingredient itemKey={index} ingredient={ingredient} clickFunction={props.remove}/>
             </li>
         ))
         return(
             <section className="pane">
                 <h3>The Burger Pane</h3>
                 <ul>
                     {burgerBits}
                 </ul>
                 <button onClick={props.clear}>Clear Burger</button>
             </section>
         )

 }
 export default BurgerPane 