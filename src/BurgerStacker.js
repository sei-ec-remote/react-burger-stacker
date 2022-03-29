import React, {useState} from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

// export default class BurgerStacker extends Component {
// constructor () {
//     super()

//     state = {
//          ingredients: [
//             {name: 'Kaiser Bun', color: 'saddlebrown'},
//             {name: 'Sesame Bun', color: 'sandybrown'},
//             {name: 'Gluten Free Bun', color: 'peru'},
//             {name: 'Soy Patty', color: '#3F250B'},
//             {name: 'Lettuce Wrap', color: 'olivedrab'},
//             {name: 'Beef Patty', color: '#3F250B'},
//             {name: 'Chicken Patty', color: 'burlywood'},
//             {name: 'Black Bean Patty', color: '#3F250B'},
//             {name: 'Lettuce', color: 'lawngreen'},
//             {name: 'Tomato', color: 'tomato'},
//             {name: 'Bacon', color: 'maroon'},
//             {name: 'Onion', color: 'lightyellow'},
//             {name: 'Cheese', color: 'goldenrod'}
//           ],
//           burgerIngs: []
//     }
// }

//     addToStack = (e) => {
//         // console.log('this is clicked', e.target)
//         const ingName = e.target.innerText
//         const ingColor = e.target.style.backgroundColor
//         setState({
//             burgerIngs: [
//                 {name: ingName, color: ingColor},
//                 ...state.burgerIngs
//             ]
//         })
//     }

//     clearBurger = () => {
//         setState({
//             burgerIngs: []
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <h1>Burger Stacker</h1>
//                 <div className='stacks'>
//                     <IngredientList 
//                     ingredients={state.ingredients}
//                     addIngs = {addToStack}
//                     />
//                     <BurgerPane 
//                     ingredients={state.burgerIngs}
//                     clear={clearBurger}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

const BurgerStacker = () => {
    const [ingredients, setIngredient] = useState(
        [
             {name: 'Kaiser Bun', color: 'saddlebrown'},
             {name: 'Sesame Bun', color: 'sandybrown'},
             {name: 'Gluten Free Bun', color: 'peru'},
             {name: 'Soy Patty', color: '#3F250B'},
             {name: 'Lettuce Wrap', color: 'olivedrab'},
             {name: 'Beef Patty', color: '#3F250B'},
             {name: 'Chicken Patty', color: 'burlywood'},
             {name: 'Black Bean Patty', color: '#3F250B'},
             {name: 'Lettuce', color: 'lawngreen'},
             {name: 'Tomato', color: 'tomato'},
             {name: 'Bacon', color: 'maroon'},
             {name: 'Onion', color: 'lightyellow'},
             {name: 'Cheese', color: 'goldenrod'}
           ]
    )
    const [burgerIngs, setBurgerIngs] = useState([])

    const addToStack = (e) => {
                 
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        setBurgerIngs (() => {
            return (
                [
                    {name: ingName, color: ingColor},
                    ...burgerIngs
                    ]
            )
        })
    }

    const clearBurger = () => {
        setBurgerIngs([])
    }
    return(
        <div>
            <h1>Burger Stacker</h1>
            <div className='stacks'>
                <IngredientList 
                ingredients={ingredients}
                addIngs = {addToStack}
                />
                <BurgerPane 
                ingredients={burgerIngs}
                clear={clearBurger}
                />
            </div>
        </div>
    )
}

export default BurgerStacker
