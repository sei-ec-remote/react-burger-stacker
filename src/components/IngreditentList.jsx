import './IngredientList.css'

const IngredientList = ({ ingredients, handleClick }) => {
    // console.log(ingredients[0].name)

    // console.log(ing)
    return (
        <div className='ingredient-list'>
            {ingredients.map((ing, i) => {
                return (
                    <li
                        key={i}
                        className='ingredient'
                    >
                        {' '}
                        <button
                            className='ingredient-btn'
                            type='submit'
                            value={JSON.stringify(ing)}
                            onClick={handleClick}
                            style={{ border: `3px solid ${ing.color}` }}
                        >
                            Add {ing.name} +
                        </button>
                    </li>
                )
            })}
        </div>
    )
}

export default IngredientList
