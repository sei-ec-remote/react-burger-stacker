import React, { useState } from "react";



// export default class Ingredient extends Component {
//     render()
//      {
//         // const ingred = this.props.ingredients.map((f,i)=> {
//         //     return <li key={i}>{f} </li>
//         // })

//         return (
//             <div>
//              <button onClick={this.props.click}>{this.props.name}</button>
//             </div>
//           )
//     }
// }


// way from school
// Ingredient is a child of Ingredient List 
// recieves props of an individual ingredient 

 const Ingredient = (props) => {

        const { name , color} = props.ingredient
        // destructuring prop so you can just say name 
        // this syntax is how you pull items from an object
        // console.log('name  in each ingredient', name)
        // console.log('color  in each ingredient', color)
        return (
            <div>
                <p style={{backgroundColor: color}}
                   id={props.itemKey}
                   onClick={props.clickFunc}
                >  
                   {name}
                </p>
            </div>
          )
}
export default Ingredient