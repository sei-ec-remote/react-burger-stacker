import React, { Component } from 'react'

class BurgerStack extends Component {
    render() {
        const burgerIngredientItems = this.props.burgerIngredients.map(
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
                        marginTop: '-10px',
                        marginBottom: '-5px'
                    }
                    return <div key={index} className='image-div' alt ={ingredient.name} style={imgStyle}></div>
                } else {
                    const imgStyle = {
                        backgroundImage: 'url(' + ingredient.image + ')',
                        backgroundPosition: 'center',
                        backgroundSize: '70%',
                        backgroundRepeat: 'no-repeat',
                        padding: '5px',
                        marginTop: '-10px',
                        marginBottom: '-5px',
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
}

export default BurgerStack