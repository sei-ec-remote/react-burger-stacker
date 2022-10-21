import React, {Component} from 'react'
import IngredientList from './IngredientList'
import Ingredient from './Ingredient'
import BurgerPane from './BurgerPane'

export default class BurgerStacker extends Component {
    state = {
        ingredients: [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'}
          ],
          burgerIngredients: []
        }

        // this function adds items to the burgerIngredients array, which allows burgerPane to render them
        addToStack = (e) => {
            const ingName = e.target.innerText
            const ingColor = e.target.style.backgroundColor

            // console.log('this is the name', ingName)
            // console.log('this is the color', ingColor)
            this.setState({
                burgerIngredients: [
                    { name: ingName, color: ingColor },
                    ...this.state.burgerIngredients
                ]
            })

        }
        
        render() {
            return (
                    <div className='panes'>
                        <h1>BurgerStacker</h1>
                        <IngredientList
                            ingredients={this.state.ingredients}
                            add={this.addToStack}
                        />
                        <BurgerPane
                            ingredients={this.state.burgerIngredients}
                        />
                    </div>
            )
        }
}
