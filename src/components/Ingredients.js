import React from 'react'

function Ingredients(props) {
    const ingredientItems = props.ingredients.map(
        (ingredient, index) => {
            const buttonStyle = {
                // Inline button styling
                backgroundColor: ingredient.color,
                textShadow: '1px 1px 2px white',
                borderRadius: '5px',
                padding: '2px 10px 2px 10px', 
                height: '30px',
                width: '150px'
            }
            return <li key={`ingredient-list-${index}`}>
                    <form>
                        {/* Resource for JSON.stringify recommendation: https://salesforce.stackexchange.com/questions/328075/event-target-value-returning-object-object-instead-of-the-value */}
                        <button type="submit" value={JSON.stringify(ingredient)} onClick={props.onClick} style={buttonStyle}>{ingredient.name}</button>
                    </form>
            </li>
        })
    return (
        <>
            <ul className="ingredient-list">
                {ingredientItems}
            </ul>
        </>
    )
}


export default Ingredients