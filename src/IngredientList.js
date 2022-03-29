import React, { useState } from 'react';
import Ingredient from "./Ingredient"


// const ingredients = [
//     {name: 'Kaiser Bun', color: 'saddlebrown'},
//     {name: 'Sesame Bun', color: 'sandybrown'},
//     {name: 'Gluten Free Bun', color: 'peru'},
//     {name: 'Lettuce Wrap', color: 'olivedrab'},
//     {name: 'Beef Patty', color: '#3F250B'},
//     {name: 'Soy Patty', color: '#3F250B'},
//     {name: 'Black Bean Patty', color: '#3F250B'},
//     {name: 'Chicken Patty', color: 'burlywood'},
//     {name: 'Lettuce', color: 'lawngreen'},
//     {name: 'Tomato', color: 'tomato'},
//     {name: 'Bacon', color: 'maroon'},
//     {name: 'Onion', color: 'lightyellow'}
//   ]



// export default class IngredientList extends Component {
//     render () {
//         const ingredient = ingredients.map((food,i)=> {
//             return  (
//               <Ingredient  key={i} name ={food.name} color = {food.color} click={this.props.click}
//               />
//             )
//         })
//         return (
//             <div>
//                 <h1>Ingredient</h1>
//                 {ingredient}
//             </div>
//         )
//     }
// }

// way in class 


const IngredientList = (props) => {
    let allIngredients = props.ingredients.map((ing,i)=> (
        <li key = {i} onClick={props.add}>
            <Ingredient  itemKey={i} ingredient={ing} 
            />
            {/* {ing.color} clickFunc={this.props.add} */}
        </li>
    ))
    return (
        <>
            <section className='pane'>
                <h3> Ingredient List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        </>
    )
    
}
export default IngredientList


 