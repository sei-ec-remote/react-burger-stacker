const Ingredient = ({ handleClick, ing, itemKey }) => {
    return (
        <li
            key={itemKey}
            className='ingredient'
        >
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
}

export default Ingredient
