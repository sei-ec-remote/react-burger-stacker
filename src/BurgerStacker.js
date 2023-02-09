// import React, { useState } from 'react'
// import IngredientList from './IngredientList'
// import BurgerPane from './BurgerPane'


// // need to get rid of class syntax, in lieu of const declaration
// // look through my component, and get rid of any of these:
//     // any use of the word 'this'
//     // any use of setState.
//     const BurgerStacker = () => {
//         const ingredients = [
//             {name: 'Kaiser Bun', color: 'saddlebrown'},
//             {name: 'Sesame Bun', color: 'sandybrown'},
//             {name: 'Gluten Free Bun', color: 'peru'},
//             {name: 'Lettuce Wrap', color: 'olivedrab'},
//             {name: 'Beef Patty', color: '#3F250B'},
//             {name: 'Soy Patty', color: '#3F250B'},
//             {name: 'Black Bean Patty', color: '#3F250B'},
//             {name: 'Chicken Patty', color: 'burlywood'},
//             {name: 'Lettuce', color: 'lawngreen'},
//             {name: 'Tomato', color: 'tomato'},
//             {name: 'Bacon', color: 'maroon'},
//             {name: 'Onion', color: 'lightyellow'},
//             {name: 'Cheese', color: 'gold'}
//         ]
//         // burgerIngredients: []
//         const [burgerIngredients, setBurgerIngredients] = useState([])
//     }

//     // this function adds items to the burgerIngredients array in state
//     const addToStack = (e) => {
//         const ingName = e.target.innerText
//         const ingColor = e.target.style.backgroundColor

//     }
        
//         // console.log(`clicked on ${ingName} and it is ${ingColor}`)

//     //     this.setState({
//     //         burgerIngredients: [
//     //             { name: ingName, color: ingColor },
//     //             ...this.state.burgerIngredients
//     //         ]
//     //     })
//     // }
//     setBurgerIngredients(
//         [{ name: ingName, color: ingColor }, ...burgerIngredients]
//     )

//      // this function will remove individual items from the burger
//      const removeFromStack = (e) => {
//         const clickIndex = e.target.id
//         // console.log('the index of the item clicked', clickIndex)
//         // get a copy of the current burger array
//         const currBurger = burgerIngredients.slice()
//         // console.log('the current burger(copy)', currBurger)
//         // splice out the ingredient we click on from that copy
//         currBurger.splice(clickIndex, 1)
//         // console.log('the copy after click', currBurger)
//         // then we'll set state with the freshly updated copy
//         setBurgerIngredients(currBurger)
//     }

//     // this empties the burger ingredients array, allowing user to start over
//     const clearBurger = () => {
//         setBurgerIngredients([])
//     }

//     //  return only one thing
//     return (
//         <div>
//             <h1>Burger Stacker</h1>
//             <div className='panes'>
//                 <IngredientList 
//                     ingredients={ingredients}
//                     add={addToStack}
//                 />
//                 <BurgerPane
//                     ingredients={burgerIngredients}
//                     remove={removeFromStack}
//                     clear={clearBurger}
//                 />
//             </div>
//         </div>
//     )
    

// export default BurgerStacker


import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
// need to get rid of class syntax, in lieu of const declaration
// look through my component, and get rid of any of these:
    // any use of the word 'this'
    // any use of setState. 
const BurgerStacker = () => {
    const ingredients = [
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
        {name: 'Onion', color: 'lightyellow'},
        {name: 'Cheese', color: 'gold'},
        {name:'pickle', color:'darkgreen'}
    ]
    const [burgerIngredients, setBurgerIngredients] = useState([])

    const addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        
        console.log(`clicked on ${ingName} and it is ${ingColor}`)

        setBurgerIngredients(
            [{ name: ingName, color: ingColor }, ...burgerIngredients]
        )
    }

    // this function will remove individual items from the burger
    const removeFromStack = (e) => {
        const clickIndex = e.target.id
        // console.log('the index of the item clicked', clickIndex)
        // get a copy of the current burger array
        const currBurger = burgerIngredients.slice()
        // console.log('the current burger(copy)', currBurger)
        // splice out the ingredient we click on from that copy
        currBurger.splice(clickIndex, 1)
        // console.log('the copy after click', currBurger)
        // then we'll set state with the freshly updated copy
        setBurgerIngredients(currBurger)
    }

    // this empties the burger ingredients array, allowing user to start over
    const clearBurger = () => {
        setBurgerIngredients([])
    }

    // rid of render, and return only one thing
    return (
        <div>
            <h1>Burger Stacker</h1>
            <div className='panes'>
                <IngredientList 
                    ingredients={ingredients}
                    add={addToStack}
                />
                <BurgerPane
                    ingredients={burgerIngredients}
                    remove={removeFromStack}
                    clear={clearBurger}
                />
            </div>
        </div>
    )
}

export default BurgerStacker