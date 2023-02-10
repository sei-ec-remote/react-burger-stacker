import Ingredient from "./Ingredient";

const IngredientList = (props) => {
    let allIngredients = props.ingredients.map((ingredient, i) =>(
        
            <Ingredient
            ingredient={ingredient}
            key={i}
            clickFunc={props.add}
            />
        
    ))
    return (
        <section className="pane">
            <h3>Ingredients List</h3>
            <ul>
                {allIngredients}
            </ul>
        </section>
    )

}

export default IngredientList
