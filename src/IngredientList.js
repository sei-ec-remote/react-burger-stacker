import React, {Component} from 'react'


export default class IngredientList extends Component {

    addLayer = (e) => {
        const burger = document.getElementById('burger')
        const layer = document.createElement('div')
        const color = e.target.style.backgroundColor
        layer.innerHTML=`${e.target.innerText}`
        layer.style.backgroundColor=`${color}`
        layer.style.textAlign='center'
        burger.appendChild(layer)
    }
    render () {
        // ing = ingredient
        const ingredientItems = this.props.ingredients.map((ing,index) => {
            return <button onClick={this.addLayer} key={index} style={{backgroundColor: `${ing.color}`}}>{ing.name}</button>
        })
        return (
            <div className='items'>
                {ingredientItems}
            </div>
        )
    }
}