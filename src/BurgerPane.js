import React, {Component} from 'react'
import Ingredient from './Ingredient'

// export default class BurgerPane extends Component{
    
//     render () {
//         let burgerStuff = this.props.ingredients.map((ing, i)=>(
//             <li key={i}>
//                 <Ingredient itemKey={i} ingredient={ing}/>
//             </li>
//         ))
//         return(
//             <section className="stack">
//                 <h3>Burger Stack</h3>
//                 <ul>
//                     {burgerStuff}
//                 </ul>
//                 <button onClick={this.props.clear}>Clear Burger</button>
//             </section>
//         )
//     }
// }

const BurgerPane = (props) => {
    let burgerStuff = props.ingredients.map((ing, i)=>(
        <li key={i}>
            <Ingredient itemKey={i} ingredient={ing}/>
        </li>
    ))
    return (
        <section className="stack">
            <h3>Burger Stack</h3>
            <ul>
                {burgerStuff}
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
}

export default BurgerPane