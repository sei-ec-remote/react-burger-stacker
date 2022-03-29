import React, {useState, useEffect} from "react";
import Ingredient from "./Ingredient.js";


const IngredientList = (props) => {
    const [ingredients, setIngredients] = useState(null)
    let initIngredients = ""
       
           initIngredients = (
           
           {props.ingredients.map((ing, index)=> (
            <li key={index} onClick={props.addIngs}>
                <Ingredient itemKey={index} ingredient={ing} clickFunc={props.add}/>
            </li>
            )
        )
    }
    ) 
        return(
            <section className="pane"> 
            <h3>Ingredients List</h3>
            <ul>    
                {initIngredients}
            </ul>
            </section>
        )
    
}

export default IngredientList