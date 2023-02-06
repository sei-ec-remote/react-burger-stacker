import React from 'react'

function BurgerStack(props) {
    let z = 9999
    const burgerIngredientItems = props.burgerIngredients.map(
        (ingredient, index) => {
            if(ingredient.name === 'Top Bun' || ingredient.name === 'Bottom Bun') {
                // Style Top & Bottom bun at 100% due to smaller png proportion
                // Styling here seems to override any CSS styling in App.css
                const imgStyle = {
                    backgroundImage: 'url(' + ingredient.image + ')',
                    backgroundPosition: 'center',
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    padding: '5px',
                    marginBottom: props.smash + 'px',
                    marginTop: '-5px', 
                    zIndex: '10000'
                }
                return <div key={index} className='image-div' alt ={ingredient.name} style={imgStyle}></div>
            } else {
                const imgStyle = {
                    backgroundImage: 'url(' + ingredient.image + ')',
                    backgroundPosition: 'center',
                    backgroundSize: '70%',
                    backgroundRepeat: 'no-repeat',
                    padding: '5px',
                    marginBottom: props.smash + 'px',
                    marginTop: '-5px',
                    zIndex:  z--
                }
                return <div key={index} className='image-div' alt ={ingredient.name} style={imgStyle}></div>
            }
        })
    return (
        <>
            {burgerIngredientItems}
        </>
    )
}

export default BurgerStack