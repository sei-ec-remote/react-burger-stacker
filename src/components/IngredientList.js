const IngredientList = (props) => {
    
    const allIngredients = props.ingredients.map((ingredient, index) => {
        return (
            
                <button 
                    key={index}
                    style={{ backgroundColor: ingredient.color }}
                    onClick={props.handleClick}
                    >
                        {ingredient.name}
                </button>
            
           
        )
    })

    return (
        <div className="ingredient-div">
            <h1>Ingredient List</h1>
            {allIngredients}
        </div>
    )
}

export default IngredientList

