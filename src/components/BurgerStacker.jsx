import './BurgerStacker.css'

const BurgerStacker = ({ ingredientStack }) => {
    return (
        <div className='burger-stacker'>
            {ingredientStack.map(ing => {
                return (
                    <h3
                        className='burger-stacker__ingredient'
                        style={{ backgroundColor: `${ing.color}` }}
                    >
                        {ing.name}
                    </h3>
                )
            })}
        </div>
    )
}

export default BurgerStacker
