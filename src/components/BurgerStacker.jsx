import './BurgerStacker.css'

const BurgerStacker = ({ ingredientStack, handleRemove }) => {
    return (
        <div className='burger-stacker'>
            {ingredientStack.map(ing => {
                return (
                    <div
                        className='burger-stacker__ingredient'
                        style={{ backgroundColor: `${ing.color}` }}
                    >
                        <h3>{ing.name}</h3>
                        <button
                            className='burger-stacker__remove'
                            onClick={handleRemove}
                        >
                            -
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default BurgerStacker
