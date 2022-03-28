import React from 'react'

//refactored to functional component!
export default function IngredientList(props) {

    function addLayer(e) {
        const burger = document.getElementById('burger')
        const layer = document.createElement('div')
        const color = e.target.style.backgroundColor
        layer.innerHTML = `${e.target.innerText}`
        layer.style.backgroundColor = `${color}`
        layer.style.textAlign = 'center'
        layer.classList.add('light-text')
        if(e.target.innerText==="Onion"||e.target.innerText==="Lettuce") {
            layer.classList.remove('light-text')
        }
        burger.appendChild(layer)
    }
    // ing = ingredient
    const ingredientItems = props.ingredients.map((ing, index) => {
        return <button className={`${ing.name=="Onion"||ing.name==="Lettuce"?"":'light-text'}`} onClick={addLayer} key={index} style={{ backgroundColor: `${ing.color}` }}>{ing.name}</button>
    })

    return (
        <div className='items'>
            {ingredientItems}
        </div>
    )
}

