import Ingredient from './Ingredient'

const IngredientList = (props) => {
    let allIngredients = props.ingredients.map((ing, index) => (
        <li key={index}>
            <Ingredient ingredient={ing} clickFunc={props.add} itemKey={index}/>
        </li>
    ))

    return (
        <>
            <section className='pane'>
                <h3>Ingredients List</h3>
                <ul className='ingredient-list'>
                    {allIngredients}    
                </ul>
            </section>
        </>
    )
}
  
  export default IngredientList