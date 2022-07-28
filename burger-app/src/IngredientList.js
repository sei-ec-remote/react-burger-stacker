import React from "react";
import Ingredient from "./Ingredient";

const IngredientList = (props) => {

      let allIngredients = props.ingredients.map((ing, index) => (
        <li key={index}>
            <Ingredient 
            ingredient={ing}
            clickFunc={props.add}
            itemKey={index}
            />
        </li>
      ))
    return (
     <>
     <section>
         <h3>Ingredients List</h3>
         <ul>
             {allIngredients}
         </ul>
     </section>
     </>
    );
  
}

export default IngredientList;
