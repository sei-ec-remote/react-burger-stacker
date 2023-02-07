const BurgerStack = (props) => {
    const addedIngredients = props.clickedIngredients.map((ingredient, index) => {
        return (
            
                <button 
                    key={index}
                    style={{ backgroundColor: ingredient.color }}
                    >
                        {ingredient.name}
                </button>
            
        )
    })
    
    return (
        <div className="burger-div">
            <h1>Burger Stack</h1>
                {addedIngredients}
                <hr></hr>
                <button onClick={props.handleClear}>Clear Burger</button>
        </div>
    )
}

export default BurgerStack



