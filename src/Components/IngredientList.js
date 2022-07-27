import Ingredient from "./Inrgedient"

const IngredientList = (props) => {

  let allIngredients = props.ingredients.map((ing, i) => (
    <li key={i}>
      <Ingredient 
          clickFunc={props.add} 
          ingredient={ing} 
          itemKey={i} 
      />
    </li>
  ))

  return (
    <>
      <section>
        <h3>Ingredients List</h3>
        <ul>{allIngredients}</ul>
      </section>
    </>
  )
}

export default IngredientList
