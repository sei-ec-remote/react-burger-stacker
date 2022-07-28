import Ingredient from './Ingredient'

const IngredientList = (props) => {
     const ingredientList = props.availableIngredients.map((ingredient, key)=> { 
     return <Ingredient ingredient={ingredient} func={props.add} key={key} />
     })
     return (
          <>
               <h3>Click on the items you want on your handburger</h3>
               {ingredientList}
          </>
     )
}

export default IngredientList