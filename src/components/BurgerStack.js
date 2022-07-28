import Ingredient from './Ingredient'

const BurgerStack = (props) => {
          const ingredients = props.ingredients.map((ingredient, key) => (
               <Ingredient key={key} ingredient={ingredient} func={props.remove} />
          ))
          return (
               <>
                    {ingredients}
               </>
          )
}

export default BurgerStack