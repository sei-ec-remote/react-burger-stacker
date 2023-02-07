import React from 'react'

function Ingredient (props) {
    const ingredients = props.ingredients.map((item, index) => {
        return (
            <form key={index}>
                <button type="submit" value={JSON.stringify(item)} onClick={props.onClick}>{item.name}</button>
            </form>
        )
    })
    return (
        <div>
            {ingredients}
        </div>
    )
}

export default Ingredient