import Ingredient from './Ingredient'
import './IngredientList.css'

const IngredientList = ({ ingredients, handleClick }) => {
    // console.log(ingredients[0].name)
    const allIngredients = ingredients.map((ing, i) => (
        <Ingredient
            handleClick={handleClick}
            ing={ing}
            itemKey={i}
        />
    ))
    // console.log(ing)
    return <div className='ingredient-list'>{allIngredients}</div>
}

export default IngredientList
