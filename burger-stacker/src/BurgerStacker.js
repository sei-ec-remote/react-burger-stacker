import React, { useState } from 'react'
// import React, { Component} from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const BurgerStacker = () => {
    const [ingredients, setIngredients] = useState(
        [
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
        ]
    ) 
    const [burgerIngredients, setBurgerIngredients] = useState ([])

    const addIngredient = (e) => {
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
        // const [burgerIngredients, setBurgerIngredients] = useState({ ingName, ingColor}, ...burgerIngredients)
        setBurgerIngredients([{ name: ingName, color: ingColor }, ...burgerIngredients])  
    }
    // const remove = (e) => {
    //     const clickIndex = e.target.id
    //     const currentBurger = this.state.burgerIngredients.slice()
    //     currentBurger.splice(clickIndex, 1)
    //     const [burgerIngredients, setBurgerIngredients] = useState(currentBurger)
    // }
    const clearBurger = () => {
        // const [burgerIngredients, setBurgerIngredients] = useState ([])
        setBurgerIngredients([])  
    }
    return(
        <>
            <h1>Burger Stacker</h1>
            <div className='panes'>
                <IngredientList 
                ingredients={ingredients}
                add={addIngredient}
                />
                <BurgerPane
                    ingredients={burgerIngredients}
                    // remove={remove}
                    clear={clearBurger}    
                />
            </div>
        </>
    )
}
export default BurgerStacker
//========================= R E F A C T O R I N G ============================
// export default class BurgerStacker extends Component {
//     constructor(){
//         super()
//         this.state ={
//             ingredients: [
//                 {name: 'Kaiser Bun', color: 'saddlebrown'},
//                 {name: 'Sesame Bun', color: 'sandybrown'},
//                 {name: 'Gluten Free Bun', color: 'peru'},
//                 {name: 'Lettuce Wrap', color: 'olivedrab'},
//                 {name: 'Beef Patty', color: '#3F250B'},
//                 {name: 'Soy Patty', color: '#3F250B'},
//                 {name: 'Black Bean Patty', color: '#3F250B'},
//                 {name: 'Chicken Patty', color: 'burlywood'},
//                 {name: 'Lettuce', color: 'lawngreen'},
//                 {name: 'Tomato', color: 'tomato'},
//                 {name: 'Bacon', color: 'maroon'},
//                 {name: 'Onion', color: 'lightyellow'} 
//             ],
//             burgerIngredients: []
//         }
//     }

    //  addIngredient = (e) => {

    //     const ingColor = e.target.style.backgroundColor
    //     const ingName = e.target.innerText
    //     this.setState({
    //         burgerIngredients: [
    //             {name: ingName, color: ingColor},
    //             ...this.state.burgerIngredients
    //         ]
    //     })
    //  }
    //  remove = (e) => {
    //     console.log("the old stack", this.state.burgerIngredients)

    //     const clickIndex = e.target.id
      
    //     const currentBurger = this.state.burgerIngredients.slice()
       
    //     currentBurger.splice(clickIndex, 1)
    //     console.log("this is current burger", currentBurger)
    //     this.setState({
    //         burgerIngredients: currentBurger
    //     })
    // }
    //  clearBurger = (e) => {
    //     this.setState({
    //         burgerIngredients: []
    //     })
    //  }
  
//     render(){
  
//         console.log("burger ingredients", this.state.burgerIngredients)
//         return(
//             <>
//                 <h1>Burger Stacker</h1>
//                 <div className='panes'>
//                     <IngredientList 
//                     ingredients={this.state.ingredients}
//                     add={this.addIngredient}
//                     />
//                     <BurgerPane
//                         ingredients={this.state.burgerIngredients}
//                         remove={this.remove}
//                         clear={this.clearBurger}    
//                     />
//                 </div>
//             </>
//         )
//     }
// }
