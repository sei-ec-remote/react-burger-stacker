import React from "react";
import Ingredients from "./Ingredients";

// ingredients list will loop over props (ingredients) meaning a for loop
// produce one Ingredients component item in the array

const IngredientsList = (props) => {

        // this is how we're able to map over all our ingredients in order to 
        // produce one ingredient 
        // we have to do a map function
        // parentheses after the arrow shows the inplied return 
         let allIngredients = props.ingredients.map((ingredients, index) => (
             //  produce a list item that displays and ingredient
            //  we added the onClick property to the props in order to see what is being clicked
             <li key={index}>
                 <Ingredients itemKey={index} ingredients={ingredients} clickFunction={props.add}/>
             </li>
         ))
        return (
            // saying section in this way allows the content
            // to be styled within the div 'panes'
            <section className="pane">
                <h3>Ingredients List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )
    
}
export default IngredientsList