import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

 // burger stakcer component is the parent of BurgerPane and IngrdientList
 // holds ingridents in state, so we can pass them as props

 export default class BurgerStacker extends Component {
     constructor(){
         super()
         this.state ={
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
     }
     // the state will hold ingredients
     // might want methods here to add inrgedients, tat wiill be passed to a child coponoent
      addIngredient = (e) => {
         // console.log("this is what was clicked", e.target.style.backgroundColor)
         // console.log("this is what was clicked", e.target.innerText)
         const ingColor = e.target.style.backgroundColor
         const ingName = e.target.innerText
         this.setState({
             burgerIngredients: [
                 {name: ingName, color: ingColor},
                 ...this.state.burgerIngredients
             ]
         })
      }
      // remove ingredient
      remove = (e) => {
         console.log("the old stack", this.state.burgerIngredients)
         // console.log("the clicked item is", e.target)
         // console.log("the clicked id is", e.target.id)
         // this is location in the array
         const clickIndex = e.target.id
         // this is a copy of the burger
         const currentBurger = this.state.burgerIngredients.slice()
         // this is rmeoving one item from the copy of the burger
         currentBurger.splice(clickIndex, 1)
         console.log("this is current burger", currentBurger)
         this.setState({
             burgerIngredients: currentBurger
         })
     }
      clearBurger = (e) => {
         this.setState({
             burgerIngredients: []
         })
      }
     //might wamt clear function here to pass down as a prop
     render(){
         // console.log("ingredients list:", this.state.ingredients)
         console.log("burger ingredients", this.state.burgerIngredients)
         return(
             <>
                 <h1>Burger Stacker</h1>
                 <div className='panes'>
                     <IngredientList 
                     ingredients={this.state.ingredients}
                     add={this.addIngredient}
                     />
                     <BurgerPane
                         ingredients={this.state.burgerIngredients}
                         remove={this.remove}
                         clear={this.clearBurger}    
                     />
                 </div>
             </>
         )
     }
 }